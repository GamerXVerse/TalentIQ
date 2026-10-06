CREATE TABLE IF NOT EXISTS candidates (
 id TEXT PRIMARY KEY, first_name TEXT NOT NULL, last_name TEXT NOT NULL, preferred_name TEXT,
 email TEXT NOT NULL, phone TEXT, university TEXT NOT NULL, degree_program TEXT NOT NULL,
 major TEXT NOT NULL, graduation_date TEXT NOT NULL, gpa TEXT, work_authorization TEXT,
 desired_function TEXT NOT NULL, technical_interests TEXT NOT NULL DEFAULT '[]',
 preferred_locations TEXT NOT NULL DEFAULT '[]', relevant_coursework TEXT NOT NULL DEFAULT '',
 relevant_skills TEXT NOT NULL DEFAULT '[]', project_experience TEXT NOT NULL DEFAULT '',
 event_code TEXT NOT NULL, resume_key TEXT, resume_name TEXT, resume_text TEXT,
 ai_consent INTEGER NOT NULL DEFAULT 0,
 record_status TEXT NOT NULL DEFAULT 'New' CHECK(record_status IN ('New','Reviewed','Follow-Up','Interview Requested','Closed')),
 approval_status TEXT NOT NULL DEFAULT 'Pending' CHECK(approval_status IN ('Pending','Approved','Rejected')),
 approval_timestamp TEXT, approved_by TEXT, summary_json TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_candidates_event ON candidates(event_code,updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_candidates_email ON candidates(email);
ALTER TABLE candidates ADD COLUMN IF NOT EXISTS removed_at TEXT;
ALTER TABLE candidates ADD COLUMN IF NOT EXISTS removed_by TEXT;
CREATE TABLE IF NOT EXISTS recruiter_observations(candidate_id TEXT PRIMARY KEY REFERENCES candidates(id) ON DELETE CASCADE,recruiter_name TEXT NOT NULL DEFAULT '',conversation_notes TEXT NOT NULL DEFAULT '',areas_discussed TEXT NOT NULL DEFAULT '',follow_up_questions TEXT NOT NULL DEFAULT '',recommended_next_steps TEXT NOT NULL DEFAULT '',candidate_questions TEXT NOT NULL DEFAULT '',updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS measurements(id BIGSERIAL PRIMARY KEY,session_id TEXT NOT NULL,event_name TEXT NOT NULL,candidate_id TEXT,duration_ms BIGINT,created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS audit_events(id BIGSERIAL PRIMARY KEY,candidate_id TEXT,actor_email TEXT NOT NULL,action TEXT NOT NULL,created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS recruiter_accounts(email TEXT PRIMARY KEY,password_salt TEXT NOT NULL,password_hash TEXT NOT NULL,iterations INTEGER NOT NULL,failed_attempts INTEGER NOT NULL DEFAULT 0,locked_until BIGINT NOT NULL DEFAULT 0,created_at TEXT NOT NULL,updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS recruiter_sessions(token_hash TEXT PRIMARY KEY,email TEXT NOT NULL REFERENCES recruiter_accounts(email) ON DELETE CASCADE,expires_at BIGINT NOT NULL,created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS resume_files(key TEXT PRIMARY KEY,content_base64 TEXT NOT NULL,content_type TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS rate_limits(bucket TEXT PRIMARY KEY,hits INTEGER NOT NULL,expires_at BIGINT NOT NULL);
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
