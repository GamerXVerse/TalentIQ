export const candidateStatuses = ["New", "Reviewed", "Follow-Up", "Interview Requested", "Closed"] as const;
export const approvalStatuses = ["Pending", "Approved", "Rejected"] as const;
// Production schema changes are applied only by immutable files in drizzle/.
export const tables = ["candidates", "recruiter_observations", "measurements", "audit_events", "recruiter_accounts", "recruiter_sessions"] as const;
