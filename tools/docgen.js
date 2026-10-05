// Word-document generator for the supervisor discussion package.
// Usage: node tools/docgen.js <content-module.js> <output.docx>
// A content module exports { theme, meta, blocks }.
//
// meta: { title, docLabel (e.g. 'Document 01'), docName (short name for footer) }
//
// Block types:
//   { t: 'masthead', kicker, text, fa, subtitle, people }   package title area (first page)
//   { t: 'h1' | 'h2', text }
//   { t: 'p', text, muted, small }                  inline **bold** and _italic_ supported
//   { t: 'bullets', items }  { t: 'numbers', ref, items }
//   { t: 'table', cols, head, rows, compact }       cols are percentages
//   { t: 'kv', cols, rows, compact, tallLast }      key/value table; tallLast = min height (twips) of last row
//   { t: 'callout', title, text }
//   { t: 'flow', steps: [{ title, body, foot }] }   horizontal chain with arrows
//   { t: 'steps', items: [[label, text]] }          vertical chain with arrows
//   { t: 'refs', items }                            compact numbered references
//   { t: 'space', pt }

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType,
  ShadingType, BorderStyle, AlignmentType, HeadingLevel, Footer, Header,
  PageNumber, LevelFormat, TableLayoutType, VerticalAlign, HeightRule, TabStopType,
} = require('docx');

const A4_W = 11906;
const A4_H = 16838;

const THEMES = {
  zina: {
    headFont: 'Cambria', bodyFont: 'Calibri', faFont: 'Vazirmatn', bodySize: 21,
    primary: '1F2A44', accent: '3E7C7A', accentLight: 'EAF2F1', rule: '3E7C7A',
    text: '262B33', muted: '5F6B7A', headFill: '1F2A44', stripe: 'F4F8F8', border: 'C9D3DA',
    h1Style: 'rule', bullet: '•',
    margins: { top: 1080, bottom: 1000, left: 1180, right: 1180 },
  },
  jamal: {
    headFont: 'Arial', bodyFont: 'Arial', faFont: 'Vazirmatn', bodySize: 19,
    primary: '6B1E2C', accent: '9C7A4A', accentLight: 'F5EFE6', rule: '9C7A4A',
    text: '2E2E2E', muted: '5A5A5A', headFill: '3B3B3B', stripe: 'F8F4EE', border: 'C8BDAE',
    h1Style: 'bar', bullet: '▪',
    margins: { top: 1000, bottom: 960, left: 1080, right: 1080 },
  },
  common: {
    headFont: 'Calibri', bodyFont: 'Calibri', faFont: 'Vazirmatn', bodySize: 21,
    primary: '1B2B4B', accent: '3A4A5C', accentLight: 'EEF1F5', rule: '1B2B4B',
    text: '222222', muted: '596372', headFill: '1B2B4B', stripe: 'F5F7FA', border: 'C9D1DB',
    h1Style: 'plain', bullet: '•',
    margins: { top: 1080, bottom: 1000, left: 1180, right: 1180 },
  },
};

const PACKAGE = 'Preliminary PhD Research Discussion Package';
const INSTITUTION = 'University of Tabriz · Faculty of Civil Engineering';

function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|(?<![A-Za-z0-9])_[^_]+_(?![A-Za-z0-9]))/g;
  let last = 0;
  let m;
  const s = String(text);
  while ((m = re.exec(s)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: s.slice(last, m.index), ...base }));
    const tok = m[0];
    if (tok.startsWith('**')) out.push(new TextRun({ text: tok.slice(2, -2), ...base, bold: true }));
    else out.push(new TextRun({ text: tok.slice(1, -1), ...base, italics: true }));
    last = m.index + tok.length;
  }
  if (last < s.length) out.push(new TextRun({ text: s.slice(last), ...base }));
  return out;
}

// Persian paragraph: true RTL (bidi paragraph + RTL run + fa-IR language).
// In a bidi paragraph, jc="left" is the logical start, i.e. the right margin.
function faParagraph(text, th, opts = {}) {
  const size = opts.size || th.bodySize + 4;
  return new Paragraph({
    bidirectional: true,
    alignment: AlignmentType.LEFT,
    spacing: { before: opts.before || 0, after: opts.after ?? 100 },
    children: [new TextRun({
      text, rightToLeft: true,
      font: { ascii: th.faFont, hAnsi: th.faFont, cs: th.faFont },
      size, sizeComplexScript: size, bold: opts.bold, boldComplexScript: opts.bold,
      color: opts.color || th.accent, language: { bidirectional: 'fa-IR' },
    })],
  });
}

const nb = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: nb, bottom: nb, left: nb, right: nb };
function line(color, size = 4) { const b = { style: BorderStyle.SINGLE, size, color }; return { top: b, bottom: b, left: b, right: b }; }

function widthsOf(pcts, total) {
  const sum = pcts.reduce((a, b) => a + b, 0);
  const w = pcts.map(p => Math.floor((p / sum) * total));
  w[w.length - 1] = total - w.slice(0, -1).reduce((a, b) => a + b, 0);
  return w;
}

function cell(text, width, th, o = {}) {
  const size = o.size || th.bodySize - 2;
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    borders: o.borders || line(th.border),
    shading: o.fill ? { fill: o.fill, type: ShadingType.CLEAR, color: 'auto' } : undefined,
    margins: { top: o.pad ?? 45, bottom: o.pad ?? 45, left: 90, right: 90 },
    verticalAlign: o.valign || VerticalAlign.CENTER,
    children: String(text).split('\n').map(l => new Paragraph({
      keepNext: !!o.keepNext,
      alignment: o.center ? AlignmentType.CENTER : AlignmentType.LEFT,
      spacing: { before: 0, after: 0, line: 245 },
      children: runs(l, { size, bold: o.bold, color: o.color || th.text, font: th.bodyFont }),
    })),
  });
}

function makeTable(b, th, cw) {
  const n = b.head ? b.head.length : b.rows[0].length;
  const widths = widthsOf(b.cols || Array(n).fill(1), cw);
  const size = b.compact ? th.bodySize - 3 : th.bodySize - 2;
  const rows = [];
  if (b.head) rows.push(new TableRow({ tableHeader: true, cantSplit: true,
    children: b.head.map((h, i) => cell(h, widths[i], th, { fill: th.headFill, color: 'FFFFFF', bold: true, size, keepNext: b.keep })) }));
  b.rows.forEach((r, ri) => rows.push(new TableRow({ cantSplit: true,
    children: r.map((c, i) => cell(c, widths[i], th, {
      size, fill: (b.firstColFill && i === 0) ? th.accentLight : (!b.firstColFill && ri % 2 === 1 ? th.stripe : undefined),
      bold: b.firstColBold && i === 0, keepNext: b.keep && ri < b.rows.length - 1,
    })) })));
  return new Table({ width: { size: cw, type: WidthType.DXA }, columnWidths: widths, layout: TableLayoutType.FIXED, rows });
}

function build(content) {
  const th = THEMES[content.theme];
  const cw = A4_W - th.margins.left - th.margins.right;
  const meta = content.meta || {};
  const children = [];
  let h1n = 0;
  const gap = (after = 80) => new Paragraph({ spacing: { before: 0, after }, children: [] });

  for (const b of content.blocks) {
    switch (b.t) {
      case 'masthead': {
        // Institutional line with package name at right.
        children.push(new Paragraph({
          tabStops: [{ type: TabStopType.RIGHT, position: cw }],
          spacing: { after: 60 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: th.rule, space: 4 } },
          children: [
            new TextRun({ text: INSTITUTION.toUpperCase(), font: th.bodyFont, size: 15, bold: true, color: th.primary, characterSpacing: 20 }),
            new TextRun({ text: '\t' + PACKAGE, font: th.bodyFont, size: 15, color: th.muted }),
          ],
        }));
        children.push(new Paragraph({ spacing: { before: 160, after: 60 }, children: [
          new TextRun({ text: (b.kicker || '').toUpperCase(), font: th.bodyFont, size: 16, bold: true, color: th.accent, characterSpacing: 30 }),
        ] }));
        const titleRun = new TextRun({ text: b.text, font: th.headFont, size: b.size || 34, bold: th !== THEMES.zina, color: th.primary });
        children.push(new Paragraph({
          spacing: { before: 0, after: 80 }, keepNext: true,
          border: th === THEMES.jamal ? { left: { style: BorderStyle.SINGLE, size: 30, color: th.primary, space: 10 } } : undefined,
          children: [titleRun],
        }));
        if (b.fa) children.push(faParagraph(b.fa, th, { size: 26, after: 80, bold: false }));
        if (b.subtitle) children.push(new Paragraph({ spacing: { after: 80 }, children: runs(b.subtitle, { size: th.bodySize - 1, color: th.muted, italics: true, font: th.bodyFont }) }));
        children.push(new Paragraph({
          spacing: { before: 40, after: 180 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: th.border, space: 6 } },
          children: runs(b.people || 'Candidates: **Zina** · **Jamal**     Proposed supervisor: **Prof. Reza Tarinejad**     October 2026', { size: th.bodySize - 2, color: th.muted, font: th.bodyFont }),
        }));
        break;
      }
      case 'h1': {
        h1n += 1;
        if (th.h1Style === 'bar') {
          children.push(new Paragraph({
            heading: HeadingLevel.HEADING_1, keepNext: true, spacing: { before: 200, after: 80 },
            shading: { fill: th.accentLight, type: ShadingType.CLEAR, color: 'auto' },
            border: { left: { style: BorderStyle.SINGLE, size: 30, color: th.primary, space: 8 } },
            children: [
              new TextRun({ text: String(h1n).padStart(2, '0') + '  ', font: th.headFont, size: 21, bold: true, color: th.accent }),
              new TextRun({ text: b.text.toUpperCase(), font: th.headFont, size: 20, bold: true, color: th.primary }),
            ],
          }));
        } else if (th.h1Style === 'rule') {
          children.push(new Paragraph({
            heading: HeadingLevel.HEADING_1, keepNext: true, spacing: { before: 220, after: 80 },
            border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: th.rule, space: 2 } },
            children: [new TextRun({ text: b.text, font: th.headFont, size: 25, color: th.primary })],
          }));
        } else {
          children.push(new Paragraph({
            heading: HeadingLevel.HEADING_1, keepNext: true, spacing: { before: 220, after: 80 },
            children: [
              new TextRun({ text: `${h1n}.  `, font: th.headFont, size: 25, bold: true, color: th.accent }),
              new TextRun({ text: b.text, font: th.headFont, size: 25, bold: true, color: th.primary }),
            ],
          }));
        }
        break;
      }
      case 'h2':
        children.push(new Paragraph({
          heading: HeadingLevel.HEADING_2, keepNext: true, spacing: { before: 140, after: 60 },
          children: [new TextRun({ text: b.text, font: th.headFont, size: th.bodySize + 1, bold: true, color: th === THEMES.jamal ? th.primary : th.accent })],
        }));
        break;
      case 'p':
        children.push(new Paragraph({
          spacing: { after: b.after ?? 90, line: 268 }, alignment: AlignmentType.JUSTIFIED,
          children: runs(b.text, { size: b.small ? th.bodySize - 2 : th.bodySize, color: b.muted ? th.muted : th.text, font: th.bodyFont, italics: b.italic }),
        }));
        break;
      case 'bullets':
      case 'numbers':
        b.items.forEach((it, i) => children.push(new Paragraph({
          numbering: { reference: b.t === 'bullets' ? 'bul' : 'num' + (b.ref || ''), level: 0 },
          spacing: { after: i === b.items.length - 1 ? 100 : 40, line: 260 },
          children: runs(it, { size: th.bodySize, color: th.text, font: th.bodyFont }),
        })));
        break;
      case 'table':
        children.push(makeTable(b, th, cw));
        children.push(gap(b.after ?? 100));
        break;
      case 'kv': {
        const widths = widthsOf(b.cols || [26, 74], cw);
        const size = b.compact ? th.bodySize - 3 : th.bodySize - 2;
        const rows = b.rows.map((r, i) => new TableRow({
          cantSplit: true,
          height: (b.tallLast && i === b.rows.length - 1) ? { value: b.tallLast, rule: HeightRule.ATLEAST } : undefined,
          children: [
            cell(r[0], widths[0], th, { size, fill: th.accentLight, bold: true, valign: (b.tallLast && i === b.rows.length - 1) ? VerticalAlign.TOP : VerticalAlign.CENTER }),
            cell(r[1], widths[1], th, { size, pad: b.pad }),
          ],
        }));
        children.push(new Table({ width: { size: cw, type: WidthType.DXA }, columnWidths: widths, layout: TableLayoutType.FIXED, rows }));
        children.push(gap(b.after ?? 100));
        break;
      }
      case 'callout': {
        const inner = [];
        if (b.title) inner.push(new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: b.title, bold: true, font: th.headFont, size: th.bodySize, color: th.primary })] }));
        inner.push(new Paragraph({ spacing: { after: 0, line: 260 }, children: runs(b.text, { size: th.bodySize - 1, color: th.text, font: th.bodyFont }) }));
        children.push(new Table({
          width: { size: cw, type: WidthType.DXA }, columnWidths: [cw], layout: TableLayoutType.FIXED,
          rows: [new TableRow({ cantSplit: true, children: [new TableCell({
            width: { size: cw, type: WidthType.DXA },
            borders: { left: { style: BorderStyle.SINGLE, size: 20, color: th.accent }, top: nb, bottom: nb, right: nb },
            shading: { fill: th.accentLight, type: ShadingType.CLEAR, color: 'auto' },
            margins: { top: 80, bottom: 80, left: 150, right: 150 },
            children: inner,
          })] })],
        }));
        children.push(gap(b.after ?? 100));
        break;
      }
      case 'flow': {
        // boxes separated by narrow arrow columns
        const n = b.steps.length;
        const arrowW = 420;
        const boxW = Math.floor((cw - arrowW * (n - 1)) / n);
        const widths = [];
        for (let i = 0; i < n; i++) { widths.push(boxW); if (i < n - 1) widths.push(arrowW); }
        widths[widths.length - 1] = cw - widths.slice(0, -1).reduce((a, c) => a + c, 0);
        const head = [], body = [], foot = [];
        b.steps.forEach((s, i) => {
          const w = widths[i * 2];
          head.push(cell(s.title, w, th, { fill: s.fill || th.headFill, color: 'FFFFFF', bold: true, center: true, size: th.bodySize - 2, borders: line(s.fill || th.headFill) }));
          body.push(cell(s.body || '', w, th, { fill: th.accentLight, size: th.bodySize - 2, valign: VerticalAlign.TOP, borders: line(th.accentLight) }));
          foot.push(cell(s.foot || '', w, th, { size: th.bodySize - 4, color: th.muted, valign: VerticalAlign.TOP, borders: noBorders, pad: 30 }));
          if (i < n - 1) {
            const aw = widths[i * 2 + 1];
            head.push(cell('**→**', aw, th, { center: true, color: th.accent, size: th.bodySize + 8, borders: noBorders }));
            body.push(cell('', aw, th, { borders: noBorders }));
            foot.push(cell('', aw, th, { borders: noBorders }));
          }
        });
        children.push(new Table({ width: { size: cw, type: WidthType.DXA }, columnWidths: widths, layout: TableLayoutType.FIXED,
          rows: [new TableRow({ cantSplit: true, children: head }), new TableRow({ cantSplit: true, children: body }), new TableRow({ cantSplit: true, children: foot })] }));
        children.push(gap(b.after ?? 100));
        break;
      }
      case 'steps': {
        const widths = widthsOf(b.cols || [32, 68], cw);
        const rows = [];
        b.items.forEach((it, i) => {
          rows.push(new TableRow({ cantSplit: true, children: [
            cell(it[0], widths[0], th, { fill: th.primary, color: 'FFFFFF', bold: true, size: th.bodySize - 2, borders: line(th.primary) }),
            cell(it[1], widths[1], th, { fill: th.accentLight, size: th.bodySize - 1, borders: line(th.accentLight) }),
          ] }));
          if (i < b.items.length - 1) rows.push(new TableRow({ cantSplit: true, children: [
            cell('▼', widths[0], th, { center: true, color: th.accent, size: th.bodySize - 6, borders: noBorders, pad: 0 }),
            cell('', widths[1], th, { borders: noBorders, pad: 0, size: th.bodySize - 6 }),
          ] }));
        });
        children.push(new Table({ width: { size: cw, type: WidthType.DXA }, columnWidths: widths, layout: TableLayoutType.FIXED, rows }));
        children.push(gap(b.after ?? 100));
        break;
      }
      case 'refs':
        b.items.forEach((it, i) => children.push(new Paragraph({
          spacing: { after: 20, line: 235 }, indent: { left: 340, hanging: 340 },
          children: [new TextRun({ text: `[${i + 1}] `, size: th.bodySize - 4, color: th.accent, bold: true, font: th.bodyFont }),
            ...runs(it, { size: th.bodySize - 4, color: th.text, font: th.bodyFont })],
        })));
        break;
      case 'space':
        children.push(gap((b.pt || 6) * 20));
        break;
      default:
        throw new Error('Unknown block type ' + b.t);
    }
  }

  const small = { size: 15, color: th.muted, font: th.bodyFont };
  const tabs = [{ type: TabStopType.RIGHT, position: cw }];
  const runningHeader = new Header({ children: [new Paragraph({
    tabStops: tabs,
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: th.border, space: 4 } },
    children: [new TextRun({ text: PACKAGE + ' · University of Tabriz', ...small }), new TextRun({ text: '\t' + (meta.docName || ''), ...small })],
  })] });
  const footer = () => new Footer({ children: [new Paragraph({
    tabStops: tabs,
    children: [
      new TextRun({ text: (meta.docLabel ? meta.docLabel + ' · ' : '') + 'Subject to supervisor confirmation', ...small }),
      new TextRun({ text: '\tPage ', ...small }), new TextRun({ children: [PageNumber.CURRENT], ...small }),
      new TextRun({ text: ' of ', ...small }), new TextRun({ children: [PageNumber.TOTAL_PAGES], ...small }),
    ],
  })] });

  return new Document({
    creator: 'Zina and Jamal',
    title: meta.title || 'Document',
    styles: {
      default: { document: { run: { font: th.bodyFont, size: th.bodySize, color: th.text } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { font: th.headFont, size: 25, color: th.primary }, paragraph: { outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { font: th.headFont, size: 22, color: th.accent }, paragraph: { outlineLevel: 1 } },
      ],
    },
    numbering: { config: [
      { reference: 'bul', levels: [{ level: 0, format: LevelFormat.BULLET, text: th.bullet, alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 380, hanging: 250 } }, run: { color: th.accent } } }] },
      ...['', 'A', 'B', 'C', 'D', 'E'].map(s => ({ reference: 'num' + s, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 290 } }, run: { color: th.accent, bold: true } } }] })),
    ] },
    sections: [{
      properties: { titlePage: true, page: { size: { width: A4_W, height: A4_H }, margin: { ...th.margins, header: 520, footer: 520 } } },
      headers: { default: runningHeader, first: new Header({ children: [new Paragraph({ children: [] })] }) },
      footers: { default: footer(), first: footer() },
      children,
    }],
  });
}

async function main() {
  const [src, out] = process.argv.slice(2);
  if (!src || !out) { console.error('usage: node tools/docgen.js <content.js> <out.docx>'); process.exit(1); }
  const content = require(path.resolve(src));
  const buf = await Packer.toBuffer(build(content));
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
  fs.writeFileSync(out, buf);
  console.log('wrote', out, buf.length, 'bytes');
}

if (require.main === module) main().catch(e => { console.error(e); process.exit(1); });
module.exports = { build, THEMES };
