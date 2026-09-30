import test from "node:test";import assert from "node:assert/strict";import {readFileSync} from "node:fs";
const html=readFileSync(new URL("../dist/client/index.html",import.meta.url),"utf8"), js=readFileSync(new URL("../dist/client/app.js",import.meta.url),"utf8"), sql=readFileSync(new URL("../drizzle/0000_initial.sql",import.meta.url),"utf8");
test("single site contains candidate and recruiter surfaces",()=>{assert.match(html,/id="intake"/);assert.match(html,/id="dashboard"/)});
for(const field of ["preferredName","university","degreeProgram","major","graduationDate","gpa","workAuthorization","desiredFunction","technicalInterests","preferredLocations","relevantCoursework","relevantSkills","projectExperience","resume"]){test(`proposal field: ${field}`,()=>assert.match(html,new RegExp(`name="${field}"`)))}
for(const status of ["New","Reviewed","Follow-Up","Interview Requested","Closed"]){test(`workflow status: ${status}`,()=>{assert.match(sql,new RegExp(status));assert.match(js,new RegExp(status))})}
test("approval is separate from record status",()=>{assert.match(sql,/record_status/);assert.match(sql,/approval_status/);assert.match(sql,/approval_timestamp/) });
test("shared database schema includes recruiter capture and measurements",()=>{assert.match(sql,/CREATE TABLE recruiter_observations/);assert.match(sql,/CREATE TABLE measurements/) });
