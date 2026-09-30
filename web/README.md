# TalentIQ web application

TalentIQ is one responsive browser application. Candidates open check-in from a QR code with no installation. Approved recruiters sign in to a spreadsheet-style dashboard and download a full Excel workbook. Both surfaces share D1; resume files are stored in R2.

## Routes

- `/#intake` - candidate check-in
- `/#dashboard` - recruiter grid, notes, comparison, status, verified summaries and questions, and Excel export
- `/api/*` - shared server API

## Verification

Run `npm ci && npm run build && npm test && npm run check`. Production publishing applies the immutable D1 migrations in `drizzle/` and provisions the logical `DB` and `UPLOADS` bindings declared in `.openai/hosting.json`.

Set `RECRUITER_EMAILS` to a comma-separated email allowlist and `ALLOWED_EVENT_CODES` to the accepted event codes in Sites runtime settings. Both fail closed when unset. Site access can be public for candidate check-in; record APIs still require a signed-in, allowlisted recruiter. The demo deployment accepts only event code `DEMO` until a real event is approved.

AI generation requires candidate opt-in and the server-side secret `GROQ_API_KEY`. `GROQ_MODEL` defaults to `openai/gpt-oss-20b`. The browser never receives the credential. Searchable PDF text is extracted in the browser before upload; scanned PDFs need a text-based replacement. Do not use real candidate data until retention, deletion, and sponsor security procedures are approved.
