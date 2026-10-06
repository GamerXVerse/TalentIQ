CREATE TABLE IF NOT EXISTS interviews (
 id TEXT PRIMARY KEY, candidate_id TEXT NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
 interviewer_email TEXT NOT NULL, started_at TEXT NOT NULL, ended_at TEXT,
 status TEXT NOT NULL DEFAULT 'recording', summary_json TEXT
);
CREATE INDEX IF NOT EXISTS idx_interviews_candidate ON interviews(candidate_id,started_at DESC);
CREATE TABLE IF NOT EXISTS interview_segments (
 interview_id TEXT NOT NULL REFERENCES interviews(id) ON DELETE CASCADE,
 sequence INTEGER NOT NULL, transcript TEXT NOT NULL, duration_ms INTEGER NOT NULL,
 created_at TEXT NOT NULL, PRIMARY KEY(interview_id,sequence)
);
