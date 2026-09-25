# Accessibility evidence

Target: WCAG 2.2 AA principles for the responsive web intake and platform accessibility guidance for the iOS app.

## Implemented checks

- All web controls have persistent labels, native keyboard behavior, visible focus rings, readable inline errors, logical DOM order, and a live error region.
- The web layout reflows to one column below 560 px and remains usable at 200% browser zoom.
- Text/background and focus colors were selected for clear contrast; essential meaning is not conveyed by color alone.
- iOS controls use semantic SwiftUI controls, Dynamic Type-compatible text, accessibility labels/values, and VoiceOver-readable progress and evidence sources.
- Motion is nonessential, and the web surface honors reduced-motion preferences.

## Manual test record

Run before each demonstration and record tester/date/result:

- Keyboard-only: complete and submit web intake without a pointer.
- VoiceOver (iOS and Safari): traverse headings, fields, errors, skill selection, recruiter queue, citations, and approval.
- Zoom/text size: Safari at 200%; iOS Accessibility XXL and landscape.
- Contrast: verify normal text, controls, focus rings, disabled controls, and error text with an automated checker.
- Error recovery: submit empty/invalid values and confirm focus, message clarity, and retained input.

## Known limitations

- Formal third-party WCAG audit has not been completed.
- Imported PDF accessibility depends on the source document.
- Horizontal candidate comparison intentionally scrolls; each candidate remains a discrete readable card.
