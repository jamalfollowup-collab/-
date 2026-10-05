// Shared Word-document generator for the paired-PhD deliverables.
// Usage: node tools/docgen.js <content-module.js> <output.docx>
// A content module exports { theme, meta, blocks }.
//
// Block types:
//   { t: 'title', text, subtitle, fa, byline }      cover/title block
//   { t: 'h1' | 'h2' | 'h3', text }
//   { t: 'p', text }                                 inline **bold** and _italic_ supported
//   { t: 'fa', text }                                Persian (RTL) paragraph
//   { t: 'bullets', items: [text] }
//   { t: 'numbers', items: [text] }
//   { t: 'table', cols: [widthPct...], head: [..], rows: [[..]], compact }
//   { t: 'callout', title, text | items }
//   { t: 'pre', lines: [text] }                      monospace diagram
//   { t: 'kv', rows: [[key, value]] }                two-column key/value table
//   { t: 'refs', items: [text] }                     hanging-indent numbered references
//   { t: 'break' }                                   page break
//   { t: 'space', pt }

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType,
  ShadingType, BorderStyle, AlignmentType, HeadingLevel, Footer, Header,
  PageNumber, LevelFormat, TableLayoutType, VerticalAlign,
} = require('docx');

const A4_W = 11906;
const A4_H = 16838;

const THEMES = {
  // Zina: deep navy + muted teal, restrained scientific serif headings.
  zina: {
    headFont: 'Georgia', bodyFont: 'Calibri', monoFont: 'Consolas', faFont: 'Tahoma',
    bodySize: 21, // half-points
    primary: '1F2A44', accent: '3E7C7A', accentLight: 'E7F0EF', rule: '3E7C7A',
    text: '262B33', muted: '5F6B7A',
    tableHeadFill: '1F2A44', tableHeadText: 'FFFFFF', tableStripe: 'F3F7F7',
    h1Style: 'rule',      // h1 with bottom rule
    margins: { top: 1250, bottom: 1150, left: 1250, right: 1250 },
    headerLabel: 'PhD Research Proposal — Zina',
  },
  // Jamal: graphite + deep burgundy + muted bronze; engineering / decision layout.
  jamal: {
    headFont: 'Arial', bodyFont: 'Arial', monoFont: 'Consolas', faFont: 'Tahoma',
    bodySize: 19,
    primary: '6B1E2C', accent: '9C7A4A', accentLight: 'F4EEE4', rule: '9C7A4A',
    text: '2E2E2E', muted: '5A5A5A',
    tableHeadFill: '3B3B3B', tableHeadText: 'FFFFFF', tableStripe: 'F6F2EC',
    h1Style: 'bar',       // h1 with left burgundy bar + numbered label
    margins: { top: 1100, bottom: 1100, left: 1150, right: 1150 },
    headerLabel: 'PhD Research Proposal — Jamal',
  },
  // Common program: neutral university navy + charcoal.
  common: {
    headFont: 'Calibri', bodyFont: 'Calibri', monoFont: 'Consolas', faFont: 'Tahoma',
    bodySize: 21,
    primary: '1B2B4B', accent: '36454F', accentLight: 'EEF1F5', rule: '1B2B4B',
    text: '222222', muted: '555F6B',
    tableHeadFill: '1B2B4B', tableHeadText: 'FFFFFF', tableStripe: 'F4F6F9',
    h1Style: 'plain',
    margins: { top: 1200, bottom: 1150, left: 1200, right: 1200 },
    headerLabel: 'Paired PhD Research Program — University of Tabriz',
  },
};

function runs(text, th, base = {}) {
  // Inline markup: **bold**, _italic_ (underscores must wrap whole words).
  const out = [];
  const re = /(\*\*[^*]+\*\*|(?<![A-Za-z0-9])_[^_]+_(?![A-Za-z0-9]))/g;
  let last = 0;
  let m;
  const s = String(text);
  while ((m = re.exec(s)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: s.slice(last, m.index), ...base }));
    const tok = m[0];
    if (tok.startsWith('**')) out.push(new TextRun({ text: tok.slice(2, -2), bold: true, ...base }));
    else out.push(new TextRun({ text: tok.slice(1, -1), italics: true, ...base }));
    last = m.index + tok.length;
  }
  if (last < s.length) out.push(new TextRun({ text: s.slice(last), ...base }));
  return out;
}

function faRun(text, th, opts = {}) {
  return new TextRun({
    text, rightToLeft: true,
    font: { ascii: th.faFont, hAnsi: th.faFont, cs: th.faFont },
    size: opts.size || th.bodySize + 2, sizeComplexScript: opts.size || th.bodySize + 2,
    bold: opts.bold, boldComplexScript: opts.bold, color: opts.color,
  });
}

function cellBorders(color) {
  const b = { style: BorderStyle.SINGLE, size: 4, color };
  return { top: b, bottom: b, left: b, right: b };
}

function makeTable(block, th, contentWidth) {
  const ncol = block.head ? block.head.length : block.rows[0].length;
  const pcts = block.cols || Array(ncol).fill(100 / ncol);
  const sum = pcts.reduce((a, b) => a + b, 0);
  const widths = pcts.map(p => Math.floor((p / sum) * contentWidth));
  widths[widths.length - 1] = contentWidth - widths.slice(0, -1).reduce((a, b) => a + b, 0);
  const size = block.compact ? th.bodySize - 3 : th.bodySize - 1;
  const borderColor = th === THEMES.jamal ? 'BFB4A5' : 'C9D2DA';
  const rows = [];
  const mkCell = (text, i, opts) => new TableCell({
    width: { size: widths[i], type: WidthType.DXA },
    borders: cellBorders(borderColor),
    shading: opts.fill ? { fill: opts.fill, type: ShadingType.CLEAR, color: 'auto' } : undefined,
    margins: { top: 60, bottom: 60, left: 90, right: 90 },
    verticalAlign: VerticalAlign.CENTER,
    children: String(text).split('\n').map(line => new Paragraph({
      spacing: { before: 0, after: 0, line: 252 },
      children: /[؀-ۿ]/.test(line) && !/[A-Za-z]/.test(line)
        ? [faRun(line, th, { size, bold: opts.bold, color: opts.color })]
        : runs(line, th, { size, bold: opts.bold, color: opts.color, font: th.bodyFont }),
      bidirectional: /[؀-ۿ]/.test(line) && !/[A-Za-z]/.test(line),
    })),
  });
  if (block.head) {
    rows.push(new TableRow({
      tableHeader: true,
      children: block.head.map((h, i) => mkCell(h, i, { fill: th.tableHeadFill, color: th.tableHeadText, bold: true })),
    }));
  }
  block.rows.forEach((r, ri) => {
    rows.push(new TableRow({
      cantSplit: true,
      children: r.map((c, i) => mkCell(c, i, {
        fill: (block.firstColFill && i === 0) ? th.accentLight : (ri % 2 === 1 ? th.tableStripe : undefined),
        bold: block.firstColBold && i === 0,
      })),
    }));
  });
  return new Table({
    width: { size: contentWidth, type: WidthType.DXA },
    columnWidths: widths,
    layout: TableLayoutType.FIXED,
    rows,
  });
}

function build(content) {
  const th = THEMES[content.theme];
  const contentWidth = A4_W - th.margins.left - th.margins.right;
  const children = [];
  let h1Count = 0;
  const para = (opts) => new Paragraph(opts);

  for (const b of content.blocks) {
    switch (b.t) {
      case 'title': {
        if (th === THEMES.jamal) {
          children.push(para({
            spacing: { before: 0, after: 60 },
            border: { left: { style: BorderStyle.SINGLE, size: 36, color: th.primary, space: 10 } },
            children: [new TextRun({ text: (b.kicker || 'PHD RESEARCH PROPOSAL').toUpperCase(), font: th.headFont, size: 17, bold: true, color: th.accent, characterSpacing: 40 })],
          }));
          children.push(para({
            spacing: { before: 0, after: 120 },
            border: { left: { style: BorderStyle.SINGLE, size: 36, color: th.primary, space: 10 } },
            children: [new TextRun({ text: b.text, font: th.headFont, size: b.size || 34, bold: true, color: th.primary })],
          }));
        } else {
          if (b.kicker) children.push(para({ spacing: { after: 80 }, children: [new TextRun({ text: b.kicker.toUpperCase(), font: th.bodyFont, size: 17, color: th.accent, bold: true, characterSpacing: 40 })] }));
          children.push(para({
            spacing: { before: 0, after: 120 },
            children: [new TextRun({ text: b.text, font: th.headFont, size: b.size || 34, bold: th !== THEMES.zina, color: th.primary })],
          }));
        }
        if (b.fa) children.push(para({ bidirectional: true, alignment: AlignmentType.RIGHT, spacing: { after: 120 }, children: [faRun(b.fa, th, { size: 26, color: th.accent, bold: true })] }));
        if (b.subtitle) children.push(para({ spacing: { after: 80 }, children: runs(b.subtitle, th, { size: th.bodySize + 1, color: th.muted, italics: th === THEMES.zina, font: th.bodyFont }) }));
        if (b.byline) children.push(para({
          spacing: { after: 200 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: th.rule, space: 6 } },
          children: runs(b.byline, th, { size: th.bodySize - 1, color: th.muted, font: th.bodyFont }),
        }));
        break;
      }
      case 'h1': {
        h1Count += 1;
        if (th.h1Style === 'bar') {
          children.push(para({
            heading: HeadingLevel.HEADING_1, keepNext: true,
            spacing: { before: 260, after: 100 },
            shading: { fill: th.accentLight, type: ShadingType.CLEAR, color: 'auto' },
            border: { left: { style: BorderStyle.SINGLE, size: 36, color: th.primary, space: 8 } },
            children: [
              new TextRun({ text: String(h1Count).padStart(2, '0') + '  ', font: th.headFont, size: 24, bold: true, color: th.accent }),
              new TextRun({ text: b.text.toUpperCase(), font: th.headFont, size: 22, bold: true, color: th.primary }),
            ],
          }));
        } else if (th.h1Style === 'rule') {
          children.push(para({
            heading: HeadingLevel.HEADING_1, keepNext: true,
            spacing: { before: 280, after: 100 },
            border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: th.rule, space: 3 } },
            children: [new TextRun({ text: b.text, font: th.headFont, size: 26, color: th.primary })],
          }));
        } else {
          children.push(para({
            heading: HeadingLevel.HEADING_1, keepNext: true,
            spacing: { before: 280, after: 100 },
            children: [new TextRun({ text: b.text, font: th.headFont, size: 28, bold: true, color: th.primary })],
          }));
        }
        break;
      }
      case 'h2':
        children.push(para({
          heading: HeadingLevel.HEADING_2, keepNext: true, spacing: { before: 180, after: 70 },
          children: [new TextRun({ text: b.text, font: th.headFont, size: th === THEMES.jamal ? 21 : 23, bold: true, color: th === THEMES.jamal ? th.primary : th.accent })],
        }));
        break;
      case 'h3':
        children.push(para({
          heading: HeadingLevel.HEADING_3, keepNext: true, spacing: { before: 120, after: 50 },
          children: [new TextRun({ text: b.text, font: th.headFont, size: th.bodySize + 1, bold: true, color: th.text })],
        }));
        break;
      case 'p':
        children.push(para({
          spacing: { after: b.after ?? 100, line: 276 }, alignment: b.center ? AlignmentType.CENTER : AlignmentType.JUSTIFIED,
          children: runs(b.text, th, { size: b.size || th.bodySize, color: b.muted ? th.muted : th.text, font: th.bodyFont }),
        }));
        break;
      case 'fa':
        children.push(para({ bidirectional: true, alignment: AlignmentType.RIGHT, spacing: { after: 100 }, children: [faRun(b.text, th, { bold: b.bold, color: b.color })] }));
        break;
      case 'bullets':
      case 'numbers':
        for (const it of b.items) {
          children.push(para({
            numbering: { reference: b.t === 'bullets' ? 'bul' : 'num' + (b.ref || ''), level: 0 },
            spacing: { after: 50, line: 264 },
            children: runs(it, th, { size: b.size || th.bodySize, color: th.text, font: th.bodyFont }),
          }));
        }
        children.push(para({ spacing: { after: 40 }, children: [] }));
        break;
      case 'table':
        children.push(makeTable(b, th, contentWidth));
        children.push(para({ spacing: { after: 100 }, children: b.caption ? runs(b.caption, th, { size: th.bodySize - 3, italics: true, color: th.muted, font: th.bodyFont }) : [] }));
        break;
      case 'kv':
        children.push(makeTable({ cols: b.cols || [26, 74], rows: b.rows, firstColFill: true, firstColBold: true, compact: b.compact }, th, contentWidth));
        children.push(para({ spacing: { after: 100 }, children: [] }));
        break;
      case 'callout': {
        const inner = [];
        if (b.title) inner.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: b.title, bold: true, font: th.headFont, size: th.bodySize + 1, color: th.primary })] }));
        if (b.text) inner.push(new Paragraph({ spacing: { after: 40, line: 264 }, children: runs(b.text, th, { size: th.bodySize, color: th.text, font: th.bodyFont }) }));
        if (b.items) for (const it of b.items) inner.push(new Paragraph({ numbering: { reference: 'bul', level: 0 }, spacing: { after: 40 }, children: runs(it, th, { size: th.bodySize - 1, color: th.text, font: th.bodyFont }) }));
        const lb = { style: BorderStyle.SINGLE, size: 24, color: th.accent };
        const nb = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
        children.push(new Table({
          width: { size: contentWidth, type: WidthType.DXA }, columnWidths: [contentWidth], layout: TableLayoutType.FIXED,
          rows: [new TableRow({ children: [new TableCell({
            width: { size: contentWidth, type: WidthType.DXA },
            borders: { left: lb, top: nb, bottom: nb, right: nb },
            shading: { fill: th.accentLight, type: ShadingType.CLEAR, color: 'auto' },
            margins: { top: 100, bottom: 100, left: 160, right: 160 },
            children: inner,
          })] })],
        }));
        children.push(para({ spacing: { after: 100 }, children: [] }));
        break;
      }
      case 'pre':
        for (const [i, line] of b.lines.entries()) {
          children.push(para({
            spacing: { before: 0, after: 0, line: 240 },
            shading: { fill: th.accentLight, type: ShadingType.CLEAR, color: 'auto' },
            keepNext: i < b.lines.length - 1,
            children: [new TextRun({ text: line.replace(/ /g, ' ') || ' ', font: th.monoFont, size: b.size || 16, color: th.primary })],
          }));
        }
        children.push(para({ spacing: { after: 120 }, children: [] }));
        break;
      case 'refs':
        b.items.forEach((it, i) => children.push(para({
          spacing: { after: 50, line: 252 }, indent: { left: 420, hanging: 420 },
          children: [new TextRun({ text: `[${i + 1}] `, size: th.bodySize - 2, color: th.accent, bold: true, font: th.bodyFont }), ...runs(it, th, { size: th.bodySize - 2, color: th.text, font: th.bodyFont })],
        })));
        break;
      case 'break':
        children.push(para({ pageBreakBefore: true, children: [] }));
        break;
      case 'space':
        children.push(para({ spacing: { after: (b.pt || 6) * 20 }, children: [] }));
        break;
      default:
        throw new Error('Unknown block type ' + b.t);
    }
  }

  const headerLabel = (content.meta && content.meta.header) || th.headerLabel;
  const footerLeft = (content.meta && content.meta.footer) || 'Faculty of Civil Engineering, University of Tabriz';
  const small = { size: 15, color: th.muted, font: th.bodyFont };

  return new Document({
    creator: 'Paired PhD research program',
    title: (content.meta && content.meta.title) || 'Document',
    styles: {
      default: { document: { run: { font: th.bodyFont, size: th.bodySize, color: th.text } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { font: th.headFont, size: 26, color: th.primary }, paragraph: { outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { font: th.headFont, size: 23, color: th.accent }, paragraph: { outlineLevel: 1 } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { font: th.headFont, size: 21, color: th.text }, paragraph: { outlineLevel: 2 } },
      ],
    },
    numbering: {
      config: [
        { reference: 'bul', levels: [{ level: 0, format: LevelFormat.BULLET, text: th === THEMES.jamal ? '▪' : '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 260 } }, run: { color: th.accent } } }] },
        ...['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(s => ({ reference: 'num' + s, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 420, hanging: 300 } }, run: { color: th.accent, bold: true } } }] })),
      ],
    },
    sections: [{
      properties: { page: { size: { width: A4_W, height: A4_H }, margin: { ...th.margins, header: 560, footer: 560 } } },
      headers: {
        default: new Header({ children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: th.rule, space: 4 } },
          children: [new TextRun({ text: headerLabel, ...small })],
        })] }),
      },
      footers: {
        default: new Footer({ children: [new Paragraph({
          tabStops: [{ type: 'right', position: A4_W - th.margins.left - th.margins.right }],
          children: [
            new TextRun({ text: footerLeft, ...small }),
            new TextRun({ text: '\tPage ', ...small }),
            new TextRun({ children: [PageNumber.CURRENT], ...small }),
            new TextRun({ text: ' of ', ...small }),
            new TextRun({ children: [PageNumber.TOTAL_PAGES], ...small }),
          ],
        })] }),
      },
      children,
    }],
  });
}

async function main() {
  const [src, out] = process.argv.slice(2);
  if (!src || !out) { console.error('usage: node tools/docgen.js <content.js> <out.docx>'); process.exit(1); }
  const content = require(path.resolve(src));
  const doc = build(content);
  const buf = await Packer.toBuffer(doc);
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
  fs.writeFileSync(out, buf);
  console.log('wrote', out, buf.length, 'bytes');
}

if (require.main === module) main().catch(e => { console.error(e); process.exit(1); });
module.exports = { build, THEMES };
