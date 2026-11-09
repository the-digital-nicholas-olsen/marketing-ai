#!/usr/bin/env python3
"""Bake a Smartsheet snapshot into the team daily brief page.

Usage:
  python3 build_brief.py --rows rows.json --blockers blockers.json \
      --sheet-id 123 --sheet-url https://app.smartsheet.com/sheets/... \
      --out brief.html

rows.json and blockers.json are the raw get_sheet_summary results for the two
reads described in SKILL.md (open steps due in the window; Blocked or Waiting
on Someone). The output is a page ready to publish with the Artifact tool.
"""
import argparse
import json
from datetime import datetime, timezone
from pathlib import Path

TEMPLATE = Path(__file__).resolve().parent.parent / "assets" / "team-brief.html"
MARK_START, MARK_END = "/*SNAPSHOT*/", "/*END*/"


def flatten(result):
    cols = {c["index"]: c["title"] for c in result.get("availableColumns", [])}
    out = []
    for row in result.get("rows", []):
        values = {cols[c["columnIndex"]]: c.get("value") for c in row.get("cells", []) if c["columnIndex"] in cols}
        out.append({"id": str(row["rowId"]), "v": values})
    return out, bool(result.get("metadata", {}).get("isSampled"))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--rows", required=True)
    ap.add_argument("--blockers", required=True)
    ap.add_argument("--sheet-id", required=True)
    ap.add_argument("--sheet-url", default="")
    ap.add_argument("--out", required=True)
    a = ap.parse_args()

    rows, rows_sampled = flatten(json.loads(Path(a.rows).read_text()))
    blockers, blk_sampled = flatten(json.loads(Path(a.blockers).read_text()))
    if rows_sampled or blk_sampled:
        raise SystemExit("A read came back sampled. Narrow it (fewer columns or a shorter window) and rerun; a partial brief hides work.")

    snap = {"generatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"), "rows": rows, "blockers": blockers}
    data = json.dumps(snap, ensure_ascii=False).replace("</", "<\\/")

    html = TEMPLATE.read_text()
    start = html.index(MARK_START)
    end = html.index(MARK_END, start) + len(MARK_END)
    html = html[:start] + data + html[end:]
    html = html.replace("__SHEET_ID__", a.sheet_id).replace("__SHEET_URL__", a.sheet_url)
    Path(a.out).write_text(html)
    print(f"Wrote {a.out}: {len(rows)} steps in the window, {len(blockers)} waiting or blocked.")


if __name__ == "__main__":
    main()
