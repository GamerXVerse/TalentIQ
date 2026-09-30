# TalentIQ

TalentIQ's primary deliverable is one responsive browser application for candidate check-in and recruiter review. Candidates reach the intake from a QR code with no installation; recruiters use the dashboard in the same site. Both surfaces use one shared D1 database, with resume files stored in R2.

## Web application (primary)

- `/#intake` - proposal-aligned candidate check-in
- `/#dashboard` - recruiter capture, search, filters, comparison, workflow status, verified AI drafts, and CSV export
- `/api/*` - shared Worker API

The source is in `web/`. Run `cd web && npm test && npm run check` for its automated verification. Hosted AI generation requires a server-side `OPENAI_API_KEY`; `OPENAI_MODEL` defaults to `gpt-4.1-mini`.

## iOS app (earlier prototype/reference)

1. Install XcodeGen: `brew install xcodegen`.
2. Run `xcodegen generate`.
3. Open `TalentIQ.xcodeproj`, choose an iOS 17+ simulator, and run the `TalentIQ` scheme.

CLI build and tests:

```sh
xcodebuild -project TalentIQ.xcodeproj -scheme TalentIQ -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build CODE_SIGNING_ALLOWED=NO
xcodebuild -project TalentIQ.xcodeproj -scheme TalentIQTests -destination 'platform=iOS Simulator,name=iPhone 17 Pro' test CODE_SIGNING_ALLOWED=NO
```

The native project remains in the repository to preserve working research and implementation ideas. It is no longer the primary product and should not receive new product features.

## Responsible-use boundary

The web summary service receives only candidate profile, resume, and recruiter notes. Strict output validation blocks uncited statements, protected-characteristic language, and ranking, scoring, advance/reject, or hiring recommendations before display. Recruiter approval is tracked separately from record status. Use synthetic data unless the sponsor authorizes another dataset.
