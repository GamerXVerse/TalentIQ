ALTER TABLE candidates ADD COLUMN ai_consent INTEGER NOT NULL DEFAULT 0;
CREATE TABLE audit_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  candidate_id TEXT,
  actor_email TEXT NOT NULL,
  action TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE INDEX idx_audit_events_candidate_created ON audit_events(candidate_id, created_at DESC);
