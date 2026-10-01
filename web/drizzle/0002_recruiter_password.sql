CREATE TABLE recruiter_accounts (
  email TEXT PRIMARY KEY,
  password_salt TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  iterations INTEGER NOT NULL,
  failed_attempts INTEGER NOT NULL DEFAULT 0,
  locked_until INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE TABLE recruiter_sessions (
  token_hash TEXT PRIMARY KEY,
  email TEXT NOT NULL REFERENCES recruiter_accounts(email) ON DELETE CASCADE,
  expires_at INTEGER NOT NULL,
  created_at TEXT NOT NULL
);
CREATE INDEX idx_recruiter_sessions_email ON recruiter_sessions(email);
CREATE INDEX idx_recruiter_sessions_expiry ON recruiter_sessions(expires_at);
PRAGMA optimize;
