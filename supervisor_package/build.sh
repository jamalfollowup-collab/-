#!/usr/bin/env bash
# Build the supervisor discussion package (Word + PDF). Run from this directory.
set -e
SOFFICE="$(ls /root/.claude/skills/synced/*/docx/scripts/office/soffice.py 2>/dev/null | head -1)"
declare -A DOCS=(
  [01_Paired_PhD_Research_Program]=src/01_program.js
  [02_Zina_Preliminary_PhD_Concept]=src/02_zina.js
  [03_Jamal_Preliminary_PhD_Concept]=src/03_jamal.js
  [04_Supervisor_Discussion_Sheet]=src/04_sheet.js
)
for name in "${!DOCS[@]}"; do
  node ../tools/docgen.js "${DOCS[$name]}" "$name.docx" >/dev/null
  if [ -n "$SOFFICE" ]; then python3 "$SOFFICE" --headless --convert-to pdf --outdir "$PWD" "$PWD/$name.docx" >/dev/null 2>&1
  else soffice --headless --convert-to pdf --outdir "$PWD" "$PWD/$name.docx" >/dev/null 2>&1; fi
done
for f in 0*.pdf; do echo "$f: $(pdfinfo "$f" | awk '/Pages/{print $2}') pages"; done
