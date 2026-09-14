---
title: Smartsheet writes for pipeline sync
summary: Row payloads, formula versus value cells, large responses, row order and read-back.
status: draft, tested 2026-09-14
owner: marketing operations
reviewed: 2026-09-14
---
# Smartsheet writes

## Row payload

```json
{"id": 1234567890, "cells": [
  {"columnId": 111, "value": 120000},
  {"columnId": 222, "value": "3 - Mobilization/Progression"},
  {"columnId": 333, "formula": "=IFERROR(VALUE([Opportunity Amount]@row) * ...)"}
]}
```

- To replace a link, add `{"columnId": <link column>, "value": "<clean URL>"}`. If the column stores hyperlinks, read `hyperlink.url` and write a hyperlink object instead of plain text.
- Use `value` or `formula` on a cell, never both. Clear a cell with `""`, not `null`.
- Won and closed rows get Amount and Stage only; leave Expected Value untouched.
- Duplicate and not-found markers are plain values in all three columns.

## Batching and responses

Send every row in one `update_rows` call (limit 500 rows). The response echoes every cell and can exceed the tool output limit; the client then saves it to a file. Check that file for `message: SUCCESS`, `failedItems: null` and one result per row before reporting success.

## Row order

`get_sheet_summary` applies a default sort, and `find_in_sheet` results are not in display order either. You may be unable to tell which duplicate row is visually first. Duplicates point to one deal, so totals do not change. Say which row kept the data.

## Read-back

Call `get_sheet_summary` with `columns` limited to `Practice / Account Name`, `Opportunity Link from Salesforce`, `Opportunity Amount`, `Opportunity Stage` and `Expected Value`. Confirm each formula shows a calculated number and each marker was stored. Do not edit other columns, add columns or move rows.
