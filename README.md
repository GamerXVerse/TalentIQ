# TalentIQ

TalentIQ is a universal web app for career-fair candidate check-in and recruiter review. Candidates use the public form from a QR code; approved recruiters sign in to review records, capture notes, verify AI-assisted drafts and interview questions, compare candidates, and download an Excel workbook. No iOS app or Xcode setup is required.

Open the [TalentIQ web app](https://talentiq-candidate-check-in.ksasikumarme.chatgpt.site/) or see [web/README.md](web/README.md) for setup and deployment details. The browser app lives entirely in `web/`.

## Run checks

```sh
cd web
npm ci
npm run build
npm test
npm run check
```

The public demo currently accepts only event code `DEMO`. Recruiter access is limited to the configured email allowlist. Live AI requires a server-side Groq key and candidate opt-in; do not submit real candidate data until the sponsor approves retention, deletion, and security procedures. Outstanding validation is tracked in [docs/ROADMAP.md](docs/ROADMAP.md).
