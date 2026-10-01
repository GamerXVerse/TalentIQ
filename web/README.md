# TalentIQ web application

TalentIQ is one responsive browser application. Candidates open check-in from a QR code with no installation. Approved recruiters sign in with TalentIQ email and password to a spreadsheet-style dashboard and download a full Excel workbook. Both surfaces share D1; resume files are stored in R2.

## Routes

- `/#intake` - candidate check-in
- `/#dashboard` - recruiter grid, notes, comparison, status, verified summaries and questions, and Excel export
- `/api/*` - shared server API

## Verification

Run `npm ci && npm run build && npm test && npm run check`. Production publishing applies the immutable D1 migrations in `drizzle/` and provisions the logical `DB` and `UPLOADS` bindings declared in `.openai/hosting.json`.

Set `RECRUITER_EMAILS` to a comma-separated email allowlist and `ALLOWED_EVENT_CODES` to the accepted event codes in Sites runtime settings. Both fail closed when unset. Site access can be public for candidate check-in; record APIs require an allowlisted recruiter with a valid TalentIQ session. The demo deployment accepts only event code `DEMO` until a real event is approved.

The first recruiter account is created through the one-time owner setup shown on Recruiter review. The owner verifies their existing identity once, chooses a password (12–128 characters), and then uses email/password for subsequent sign-ins. Passwords are salted and PBKDF2-hashed in D1; sessions use 12-hour HttpOnly, Secure cookies. Five failed attempts temporarily lock an account for 15 minutes. Do not create public self-registration for private candidate records. Password recovery and additional recruiter provisioning are not yet implemented; the owner must arrange these before broader rollout.

AI generation requires candidate opt-in and the server-side secret `GROQ_API_KEY`. `GROQ_MODEL` defaults to `openai/gpt-oss-20b`. The browser never receives the credential. Searchable PDF text is extracted in the browser before upload; scanned PDFs need a text-based replacement. Do not use real candidate data until retention, deletion, and sponsor security procedures are approved.
