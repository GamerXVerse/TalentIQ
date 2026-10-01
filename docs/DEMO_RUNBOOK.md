# TalentIQ presentation runbook

TalentIQ is a web-only capstone MVP. Open the [live app](https://talentiq-candidate-check-in.ksasikumarme.chatgpt.site/) in a browser; no Xcode, iOS device, or installation is needed. Use **synthetic data only** for this demo.

## Before presenting

1. Open the candidate page and the **Recruiter review** page in separate browser tabs.
2. On Recruiter review, sign in with the owner's TalentIQ email and password. For the first use only, select the owner setup link, verify the existing owner account, and choose a password. Confirm that the candidate table loads. If access is denied, ask the TalentIQ owner to approve the account before presenting.
3. Keep a synthetic candidate profile handy. The demo event code is `DEMO`. Do not use an actual person's resume or contact details.
4. If you plan to show AI-generated drafts, first configure the hosted `GROQ_API_KEY` and complete the live-model evaluation in [AI_EVALUATION.md](AI_EVALUATION.md). Without that key, draft generation correctly reports that it is unavailable. Do not present it as a working live-AI feature until verified.

## Suggested two-minute walkthrough

1. On **Candidate check-in**, enter a synthetic profile, event code `DEMO`, and optionally a text-based PDF or `.txt` resume (5 MB maximum). Explain that AI processing is optional and requires the candidate's checkbox consent. Submit and show the confirmation code.
2. On **Recruiter review**, refresh the queue. Find the new profile in the spreadsheet-style table, then open its details. Show the candidate's supplied fields, recruiter notes, status control, and side-by-side comparison when at least two demo records exist.
3. Enter and save a synthetic recruiter note. Select **Export Excel** and open the downloaded `.xlsx` file. The workbook includes candidate fields, notes, workflow status, and interview questions where available.
4. Explain that AI drafts require recruiter review and approval before use; TalentIQ does not rank, score, or decide whether to advance or reject candidates. If the Groq key is not configured, explain that this is an integration-ready but unverified part of the prototype.

## Current release boundary

Automated build, syntax, and 36 product/security tests pass. A live synthetic check-in succeeded, and anonymous access to recruiter records returned 403. The signed-in recruiter journey and live Groq generation still require real-account/key verification. Real candidate intake should wait for sponsor-approved retention, deletion, malware-scanning, and incident-response procedures. See [ROADMAP.md](ROADMAP.md) for the remaining work.
