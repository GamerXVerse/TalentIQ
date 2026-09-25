# TalentIQ

TalentIQ is an iOS 17+ career-fair candidate intake and recruiter review prototype, with a responsive web intake companion in `web/`.

## iOS app

1. Install XcodeGen: `brew install xcodegen`.
2. Run `xcodegen generate`.
3. Open `TalentIQ.xcodeproj`, choose an iOS 17+ simulator, and run the `TalentIQ` scheme.

CLI build and tests:

```sh
xcodebuild -project TalentIQ.xcodeproj -scheme TalentIQ -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build CODE_SIGNING_ALLOWED=NO
xcodebuild -project TalentIQ.xcodeproj -scheme TalentIQTests -destination 'platform=iOS Simulator,name=iPhone 17 Pro' test CODE_SIGNING_ALLOWED=NO
```

## Web intake

Open `web/dist/index.html`, or serve `web/dist` with any static web server. Add `?event=UARK2026` to prefill an event code for a QR link.

The browser prototype stores submissions in that browser and lets the candidate download a JSON handoff record. A production rollout still needs an authenticated shared API and database; see `docs/ROADMAP.md`.

## Responsible-use boundary

The on-device candidate draft generator is deterministic and source-grounded. It never scores, ranks, advances, or rejects candidates. Recruiter approval is recorded explicitly. Use synthetic data unless the sponsor authorizes another dataset.
