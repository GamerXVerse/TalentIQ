# TalentIQ · J.B. Hunt career-fair application

This package includes the redesigned application and a real server API. It is not a static-only website. Deploy the whole extracted folder, including `api`, `server`, `scripts`, `package.json`, and `vercel.json`.

## 1. Connect the database

In Vercel, open **talentiq-web → Storage → Create Database → Neon Postgres** (or add Neon from the Marketplace). Connect it to this project and the **Production** environment. Use a separate database branch if you also deploy previews.

The application reads `DATABASE_URL`, with `POSTGRES_URL` as a fallback. If your integration uses another name, add its connection string as `DATABASE_URL` in the project’s environment variables. Keep it server-side.

Resume originals are stored privately in Postgres alongside account and candidate data, capped at 3 MB each. No Firebase project or public file bucket is required. This is suitable for the current career-fair scope; larger ongoing document volumes should move to private object storage.

## 2. Add server environment variables

Open **Settings → Environment Variables** for **talentiq-web**. Add these to **Production** before deploying:

| Variable | Value |
| --- | --- |
| `DATABASE_URL` | Neon Postgres connection string; usually supplied by the integration |
| `GROQ_API_KEY` | Your existing Groq key |
| `RECRUITER_EMAILS` | The email you will use for interviewer sign-in; comma-separated allowlist |
| `RECRUITER_SETUP_TOKEN` | A private random value with at least 32 characters, used for initial interviewer setup |

Optional model overrides:

| Variable | Default |
| --- | --- |
| `GROQ_MODEL` | `openai/gpt-oss-20b` |
| `GROQ_VISION_MODEL` | `qwen/qwen3.8-27b` |
| `GROQ_AUDIO_MODEL` | `whisper-large-v3-turbo` |

Do not prefix these variables with `VITE_` or `NEXT_PUBLIC_`, add them to frontend files, or put real values in the ZIP. After any environment change, create a new deployment. Groq’s supported models can change; check its [vision documentation](https://console.groq.com/docs/vision) and [model list](https://console.groq.com/docs/models). The documented vision model is currently a preview model, so keep the override available and recheck provider support before your event.

The event code is fixed to **12345** in the server and UI. An old `ALLOWED_EVENT_CODES` variable does not override it.

## 3. Deploy the complete package

To update your current app, extract `TalentIQ-Career-Fair-Vercel.zip`, open the existing **talentiq-web** project in the Vercel dashboard, and drop the **whole extracted folder** onto that project. For a project created through Drop without Git, this creates a new production deployment in the same project and uses its saved variables.

Alternatively, upload the ZIP to [Vercel Drop](https://vercel.com/drop). **Drop’s landing page creates a new project**, so a new project will need its own database connection and environment variables. Vercel Drop supports both static files and source projects; this package includes the server API and deployment configuration. See [Vercel’s Drop documentation](https://vercel.com/docs/drop).

Project settings:

- Framework: **Other**
- Root directory: the extracted folder containing `package.json`
- Install command: `npm install`
- Build command: `node scripts/prepare.mjs` (configured in `vercel.json`)
- Output directory: `public`
- Node.js: **24.x**

The build initializes the Postgres schema with `CREATE TABLE IF NOT EXISTS` inside a transaction. It never seeds demonstration candidates or overwrites existing records. If no database variable exists, the UI still deploys but honestly reports that check-in is unavailable. Connect the database and redeploy.

CLI alternative, from the extracted folder:

```sh
npm install
npx vercel link
npx vercel --prod
```

Choose your existing `talentiq-web` project. Do not upload only `public`.

## 4. Activate interviewer access

Open the production site → **Interviewer → First interviewer? Set up access**. Enter the allowlisted email, your private setup token, and a new password of at least 12 characters. After this first setup, sign in with email and password. Initial setup does not trust a ChatGPT identity header on Vercel.

Remove `RECRUITER_SETUP_TOKEN` from Vercel and redeploy after setup. The current UI initializes one interviewer account. To provision additional allowlisted interviewers, add `DATABASE_URL`, `RECRUITER_EMAILS`, `INTERVIEWER_EMAIL`, and `INTERVIEWER_PASSWORD` to a private `.env.local` file in the extracted folder, then run `npm install` and `npm run interviewer:add`. Delete the extra provisioning password from that private file afterward. The script creates a new allowlisted account without resetting existing accounts. Do not reuse or share the first interviewer’s password.

## 5. Run the actual event checks

Visit `/api/health` on the production domain. Confirm:

```json
{
  "ok": true,
  "database": { "provider": "Neon Postgres", "connected": true },
  "uploads": { "provider": "Private Postgres documents", "configured": true },
  "aiConfigured": true,
  "interviewerConfigured": true,
  "eventCode": "12345"
}
```

`aiConfigured` confirms that a key is present, not that Groq accepted it. Use a clearly labeled test candidate to verify the complete flow:

1. Use a real phone over HTTPS. Enter **12345**, create a candidate account, and continue.
2. Photograph a synthetic resume with the in-app camera or upload a scanned PDF. Enable AI consent and choose **Extract resume with Groq**. Verify the text and education fields.
3. Record a short introduction with voice consent. Check the transcript, then submit.
4. Sign in as an interviewer. Verify the candidate appears, download the private resume, generate a brief, inspect the cited questions, and save notes.
5. With permission from everyone being recorded and the candidate’s AI consent, record a conversation. Review the transcript before saving notes.
6. Refresh or sign out/in to confirm records persist. Export Excel and verify the result.
7. Open **Event check-in** on the **production domain** and download the booth QR code. Scan that QR with another phone. It must open the production URL with `?event=12345`, not localhost or an obsolete preview URL.

Camera/microphone features require HTTPS (localhost is allowed for development), device permission, and browser support. QR scanning uses a bundled decoder, including on browsers without `BarcodeDetector`. File upload, native phone camera capture, manual event entry, and typed notes remain available as alternatives.

## Implemented safeguards and operating limits

- Candidate and interviewer sessions use separate secure HttpOnly cookies, hashed session tokens, password hashing, expiry, and server-side authorization.
- Candidates cannot retrieve the queue, private recruiter notes, or other candidates’ records. Interviewer originals are served only after authentication.
- Same-origin checks protect writes. Candidate auth, extraction, and transcription have database-backed limits; interviewer password failures also lock the account temporarily.
- Resume extraction, interview preparation, and recording require the relevant consent. AI drafts do not rank candidates or make hiring decisions.
- Voice recordings stop after 60 seconds and are transcribed server-side. Raw audio remains in the current browser session for playback/retry; it is not retained in the database. Save the reviewed transcript as notes if needed.
- Readable PDFs are extracted locally; image resumes and scanned PDFs use Groq vision. Scanned PDFs support up to three pages. Candidate-entered details stay editable.
- Candidate accounts currently use email/password without email verification, self-service password reset, or enterprise SSO. Plan organizer-assisted account support for this event; add those capabilities before broader rollout.
- The project still needs your live database and credentials. Local tests are not a substitute for the real phone/Groq smoke test above. Define access, retention, backup, and deletion practices with the event organizer before collecting real candidate data.

## What was verified

The former live package detected a Groq key but crashed on recruiter-session lookup. Its “D1”/“R2” health labels were hardcoded and its Vercel adapter supplied neither binding. This package replaces that missing persistence layer with Postgres and reports actual database readiness.

Automated tests use embedded **real Postgres** for accounts, records, private resume retrieval, notes, status changes, sessions, and consent checks. Provider responses are simulated in those tests; no Groq key is bundled. Browser checks cover candidate check-in, resume upload, persistent login, interviewer queue, notes, phone layouts, and console errors. The live Groq integration and physical camera/microphone need the deployment checks above.

Design references: [Ashby’s recruiting workflows](https://www.ashbyhq.com/growth) inspired the queue/brief separation and evidence citations. The attached J.B. Hunt photographs and the supplied official scroll-logo artwork are bundled locally. Inter is bundled under its included SIL Open Font License.
