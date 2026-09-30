# Accessibility evidence

Target: WCAG 2.2 AA principles for the single responsive web application.

## Rebuilt web application checks — September 26, 2026

| Check | Result | Evidence |
| --- | --- | --- |
| Candidate-to-recruiter end-to-end flow | Pass | Submitted a synthetic candidate in one deployed browser view, then opened a separate recruiter view. The D1-backed queue showed the same candidate immediately; recruiter notes and the Follow-Up status persisted after reload. |
| Recruiter keyboard traversal | Pass for inspected path | Tab reached skip link, both primary routes, Refresh, Export CSV, search, status, event, comparison checkbox, candidate record, and record-status control in logical order. Enter opened the candidate detail without a pointer. |
| Accessibility-tree inspection | Pass for inspected path | Candidate fields were exposed with labels and required state. Recruiter filters, queue record, workflow status, notes, AI action, and error alert had semantic roles and names. |
| 200% zoom-equivalent reflow | Pass after remediation | At a 240 px layout viewport (half of the original mobile width), intake `scrollWidth` was 231 px and dashboard `scrollWidth` was 237 px: both remained inside the viewport. Fieldset and grid children were given `min-width: 0` after the initial check exposed min-content overflow. |
| AI failure recovery | Pass | With no model credential configured, the live UI retained recruiter notes and displayed an assertive “AI generation is unavailable” error instead of showing a fabricated summary. |
| Contrast | Pass for core measured pairs | Ink/white 18.73:1, muted/white 6.24:1, error/white 8.00:1, focus/white 6.48:1, and ink/yellow 13.69:1. |

The synchronized workflow used only synthetic data (`Morgan Chen`, `morgan.chen@example.test`, event `SYNC-TEST`).

## Implemented support

- Web controls use persistent labels, native keyboard behavior, visible focus rings, readable inline errors, logical DOM order, and an assertive live error region.
- The web layout reflows from two columns to one below 560 CSS pixels.
- iOS uses semantic SwiftUI controls, scalable system text, and explicit accessibility labels, values, and hints for progress, skills, and primary actions.
- Motion is nonessential, and the web surface honors reduced-motion preferences.

## Executed checks — September 25, 2026

| Check | Surface | Result | Evidence |
| --- | --- | --- | --- |
| Keyboard-only completion | Deployed web intake | Pass | Starting from the document, Tab reached first name, last name, email, phone, event code, role, education, experience, skills, and submit in logical order. Space selected the role and Enter submitted a synthetic record. Focus moved to the success region. |
| 200% zoom-equivalent reflow | Deployed web intake | Pass | The 445 px browser viewport was reduced to a 225 px CSS viewport, equivalent to 200% zoom. Every input and action reflowed to 162 px within the viewport; document `scrollWidth` equaled `clientWidth`, so no horizontal page scrolling was introduced. |
| Contrast calculation | Web CSS colors | Pass for checked pairs | WCAG relative-luminance ratios: ink/white 18.73:1; muted/white 6.24:1; error/white 8.00:1; focus/white 6.48:1; ink/yellow 13.69:1; notice text/background 11.47:1. |
| Accessibility-tree inspection | Deployed web intake | Pass | Required fields were exposed as labeled text fields, the target role as a radio group, submit/download/restart as buttons, the page title as a heading, and the success confirmation as readable text. |
| Accessibility-tree inspection | iOS Simulator, iPhone 17 Pro / iOS 26.5 | Pass on candidate flow inspected | Progress exposed a label and numeric percentage; fields, resume actions, skills, and primary actions had readable labels and values. |
| Skills grid and long labels | iOS Simulator, iPhone 17 Pro / iOS 26.5 | Pass | The grid rendered before the selected-skills section in two columns. “Software Development,” “JavaScript / TypeScript,” “Cloud Computing,” and “Machine Learning” wrapped inside their cards without overlap; the Review Submission action remained reachable. |

The web checks used synthetic data only (`Ada Lovelace`, `ada@example.test`, event `JBH-TEST`).

## Not yet executed

- Complete keyboard-only submission of every rebuilt intake field and every comparison/approval action.
- A human-operated VoiceOver or NVDA pass. Accessibility-tree inspection is useful evidence but is not a substitute for listening to actual announcements and verifying rotor order.
- iOS Accessibility XXL, landscape, Switch Control, and Voice Control.
- Error-recovery testing across every validation state.
- A formal third-party WCAG audit.

Do not describe the unexecuted items as passed. Before a real-data pilot, run VoiceOver through headings, fields, validation errors, role choice, skill selection, recruiter queue, evidence citations, and approval; also verify focus retention after each error.

## Known limitations

- Imported PDF accessibility depends on the source document.
- Horizontal candidate comparison intentionally scrolls; each candidate remains a discrete readable card.
