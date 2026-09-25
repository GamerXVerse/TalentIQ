# Remaining production work

The repository now contains a functional browser intake and a richer iOS recruiter MVP. Cross-device synchronization is intentionally not represented as complete: it requires infrastructure and deployment decisions outside a safe local prototype.

## Shared backend acceptance criteria

- Authenticated recruiter access and least-privilege service roles.
- Candidate web submissions and iOS recruiter reads use one versioned API schema.
- Encryption in transit and at rest, retention/deletion rules, audit events, conflict handling, and offline retry.
- Resume upload scanning and private object storage; never place candidate documents in public buckets.
- Synthetic-data load and security tests before any approved real-data pilot.
- Repository conformance tests run against both local and remote implementations.

`TalentIQRepository` is the seam for a future remote implementation. The static web prototype exports the same core fields as a JSON handoff, but browser-local storage is not cross-device sync.
