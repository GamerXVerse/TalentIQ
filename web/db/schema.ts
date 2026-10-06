export const candidateStatuses = ["New", "Reviewed", "Follow-Up", "Interview Requested", "Closed"] as const;
export const approvalStatuses = ["Pending", "Approved", "Rejected"] as const;
// Vercel uses the additive Postgres schema in server/schema.sql. The drizzle/
// migrations preserve the original SQLite-compatible deployment schema.
export const tables = ["candidates", "recruiter_observations", "measurements", "audit_events", "recruiter_accounts", "recruiter_sessions", "interviews", "interview_segments"] as const;
