import test from "node:test";
import assert from "node:assert/strict";
import { unzipSync, strFromU8 } from "fflate";
import worker from "../dist/server/index.js";

const env = {
  RECRUITER_EMAILS: "recruiter@example.org",
  DB: {
    prepare() {
      return {
        bind() { return this; },
        run: async () => ({}),
        all: async () => ({ results: [{
          id: "candidate-1", first_name: "Ava", last_name: "Lee", email: "ava@example.org",
          university: "University", degree_program: "BS", major: "CS", graduation_date: "2027-05",
          desired_function: "Software", technical_interests: "[]", preferred_locations: "[]",
          relevant_skills: "[\"JavaScript\"]", project_experience: "=HYPERLINK(\"bad\")",
          event_code: "FAIR", record_status: "New", approval_status: "Pending",
          summary_json: JSON.stringify({ statements: [], interviewQuestions: [{ text: "How did you use JavaScript?", citations: ["Candidate profile"] }] }),
          created_at: "2026-09-30T00:00:00Z", updated_at: "2026-09-30T00:00:00Z"
        }] })
      };
    }
  }
};

test("candidate records require an allowlisted signed-in recruiter", async () => {
  const anonymous = await worker.fetch(new Request("https://example.com/api/candidates"), env);
  assert.equal(anonymous.status, 403);
  const outsider = await worker.fetch(new Request("https://example.com/api/export.xlsx", { headers: { "oai-authenticated-user-email": "other@example.org" } }), env);
  assert.equal(outsider.status, 403);
  const session = await worker.fetch(new Request("https://example.com/api/recruiter-session", { headers: { "oai-authenticated-user-email": "recruiter@example.org" } }), env);
  assert.deepEqual(await session.json(), { authorized: true });
});

test("AI cannot receive a candidate record without opt-in", async () => {
  const noConsent = {
    ...env,
    DB: { prepare: () => ({ bind() { return this; }, first: async () => ({
      id: "candidate-1", first_name: "Ava", last_name: "Lee", email: "ava@example.org",
      university: "University", degree_program: "BS", major: "CS", graduation_date: "2027-05",
      desired_function: "Software", event_code: "DEMO", technical_interests: "[]",
      preferred_locations: "[]", relevant_skills: "[]", ai_consent: 0
    }) }) }
  };
  const response = await worker.fetch(new Request("https://example.com/api/candidates/candidate-1/summary", {
    method: "POST", headers: { "oai-authenticated-user-email": "recruiter@example.org", "content-type": "application/json" }, body: "{}"
  }), noConsent);
  assert.equal(response.status, 403);
  assert.match((await response.json()).error, /did not opt in/);
});

test("Excel export is a workbook with full detail and inert candidate text", async () => {
  const response = await worker.fetch(new Request("https://example.com/api/export.xlsx", { headers: { "oai-authenticated-user-email": "recruiter@example.org" } }), env);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /spreadsheetml/);
  const zipped = unzipSync(new Uint8Array(await response.arrayBuffer()));
  const sheet = strFromU8(zipped["xl/worksheets/sheet1.xml"]);
  assert.match(sheet, /Interview questions/);
  assert.match(sheet, /How did you use JavaScript\?/);
  assert.match(sheet, /=HYPERLINK/);
  assert.doesNotMatch(sheet, /<f>/);
  assert.match(sheet, /<autoFilter/);
});
