CREATE TABLE candidates (
  id TEXT PRIMARY KEY, first_name TEXT NOT NULL, last_name TEXT NOT NULL, preferred_name TEXT,
  email TEXT NOT NULL, phone TEXT, university TEXT NOT NULL, degree_program TEXT NOT NULL,
  major TEXT NOT NULL, graduation_date TEXT NOT NULL, gpa TEXT, work_authorization TEXT,
  desired_function TEXT NOT NULL, technical_interests TEXT NOT NULL DEFAULT '[]',
  preferred_locations TEXT NOT NULL DEFAULT '[]', relevant_coursework TEXT NOT NULL DEFAULT '',
  relevant_skills TEXT NOT NULL DEFAULT '[]', project_experience TEXT NOT NULL DEFAULT '',
  event_code TEXT NOT NULL, resume_key TEXT, resume_name TEXT, resume_text TEXT,
  record_status TEXT NOT NULL DEFAULT 'New' CHECK (record_status IN ('New','Reviewed','Follow-Up','Interview Requested','Closed')),
  approval_status TEXT NOT NULL DEFAULT 'Pending' CHECK (approval_status IN ('Pending','Approved','Rejected')),
  approval_timestamp TEXT, approved_by TEXT, summary_json TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL
);
CREATE TABLE recruiter_observations (
  candidate_id TEXT PRIMARY KEY REFERENCES candidates(id) ON DELETE CASCADE,
  recruiter_name TEXT NOT NULL DEFAULT '', conversation_notes TEXT NOT NULL DEFAULT '',
  areas_discussed TEXT NOT NULL DEFAULT '', follow_up_questions TEXT NOT NULL DEFAULT '',
  recommended_next_steps TEXT NOT NULL DEFAULT '', candidate_questions TEXT NOT NULL DEFAULT '', updated_at TEXT NOT NULL
);
CREATE TABLE measurements (
  id INTEGER PRIMARY KEY AUTOINCREMENT, session_id TEXT NOT NULL, event_name TEXT NOT NULL,
  candidate_id TEXT, duration_ms INTEGER, created_at TEXT NOT NULL
);
CREATE INDEX idx_candidates_status_updated ON candidates(record_status, updated_at DESC);
CREATE INDEX idx_candidates_event_updated ON candidates(event_code, updated_at DESC);
CREATE INDEX idx_candidates_email ON candidates(email);
CREATE INDEX idx_measurements_event_created ON measurements(event_name, created_at DESC);
PRAGMA optimize;
