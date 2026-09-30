# Product direction and remaining work

TalentIQ is one responsive web application. Candidate intake, recruiter capture, review, comparison, workflow updates, AI draft verification, and Excel export share D1/R2 persistence. The product has no native-app requirement.

## Remaining work

- Configure the hosted `GROQ_API_KEY` secret and execute the live-model evaluation in `AI_EVALUATION.md`. No live-model accuracy claim is made yet.
- Recruiter APIs now require a signed-in identity on the `RECRUITER_EMAILS` allowlist. The public candidate form accepts only `ALLOWED_EVENT_CODES`; the current code is `DEMO` for synthetic testing.
- Text-based PDFs are extracted in the browser. Scanned-image PDFs require OCR or a text-based replacement.
- Recruiter deletion removes the record and uploaded resume, and changes/exports are logged. Sponsor-approved retention duration, scheduled purging, malware scanning, and incident-response procedures still need decisions before real-candidate use.
- Add an applicant-tracking-system integration only after sponsor requirements and security review; this is outside MVP scope.
- Run the human accessibility and comparative-study work still marked unexecuted in their respective documents.
