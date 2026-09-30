# Product direction and remaining work

TalentIQ is one responsive web application. Candidate intake, recruiter capture, review, comparison, workflow updates, AI draft verification, and export live in the same browser product and share D1/R2 persistence.

The Swift iOS application remains in the repository only as an earlier prototype/reference. Retaining it prevents loss of working research; it is not a second primary front end and should not receive new features.

## Remaining work

- Configure the hosted `OPENAI_API_KEY` and execute the live-model evaluation in `AI_EVALUATION.md`.
- Add role-specific recruiter authentication before any non-synthetic pilot. Deployment access policy is not a replacement for application authorization.
- Extract searchable text from uploaded PDF resumes. The file is stored in R2, but only plain-text uploads are immediately available to summarization.
- Define retention, deletion, audit, malware scanning, and incident-handling policy before sponsor-approved data.
- Run the manual accessibility checks and comparative study still explicitly marked unexecuted.
- Applicant-tracking-system integration remains outside the MVP scope.
