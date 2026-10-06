ALTER TABLE candidates ADD COLUMN removed_at TEXT;
ALTER TABLE candidates ADD COLUMN removed_by TEXT;
CREATE TABLE IF NOT EXISTS rate_limits (
  bucket TEXT PRIMARY KEY,
  hits INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
