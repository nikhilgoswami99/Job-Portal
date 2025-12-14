import data from "../../../jobsData.json";

import { writeFile } from "node:fs/promises";

export function GET(request) {

  return Response.json(data);
}

export async function POST(request) {
  let body = await request.json();

  let newJob = {
    id: crypto.randomUUID(),
    title: body.title,
    department: "Ministry of Home Affairs",
    location: "New Delhi",
    qualification: "12th Pass",
    salary: "₹25,500 - ₹81,100",
    application_last_date: "2025-01-15",
    exam_date: "2025-02-20",
    apply_link: "https://gov.in/jobs/clerk-1",
  };

  data.push(newJob);

  await writeFile("jobsData.json", JSON.stringify(data, null, 2));
  return Response.json(newJob);
}
