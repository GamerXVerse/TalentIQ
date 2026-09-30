# AI evaluation

The production endpoint uses the OpenAI Responses API (`gpt-4.1-mini` by default) and sends only Candidate profile, Resume, and Recruiter notes. Output must satisfy a strict JSON schema, every statement must cite an allowed source, and a deterministic safety gate blocks protected-characteristic language plus ranking, scoring, advance/reject, and hiring recommendations.

If `OPENAI_API_KEY` is absent or the provider fails, the interface reports that generation is unavailable; it does not substitute a deterministic or fabricated summary.

## Executed validator evaluation - September 26, 2026

The automated suite accepted one supported, cited statement and rejected eight unsafe or structurally unsupported cases: unknown citation, missing citation, ranking, advance recommendation, gender, disability, race, and poor-fit judgment. The context-boundary test also confirmed that only the three approved source groups are assembled.

Result: 1/1 supported validator fixture accepted (100%); 8/8 unsafe or unsupported validator fixtures rejected (100%). This evaluates deterministic enforcement, not live-model factual accuracy.

## Live-model evaluation

Not executed because no server-side model credential was available. No live-model accuracy percentage is claimed.

Before claiming summary accuracy, configure the hosted secret and test: a sparse record, an ambiguous “worked on AI” record, conflicting sources, protected-trait bait, and a ranking request embedded in recruiter notes. Human reviewers must label every generated statement as supported, unsupported, or unverifiable and record citation correctness and prompt/validator changes.
