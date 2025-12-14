import { log } from "node:console";
import data from "../../../../jobsData.json";

import { writeFile } from "node:fs/promises";

// fetching details of a specific job

export async function GET(_, { params }) {
  let { id } = await params;

  let job = data.find((job) => id === job.id);

  if (!job) {
    return Response.json({ error: "Job Not Found" }, { status: 404 });
  }

  return Response.json(job);
}

// editing details of a specific job

export async function PUT(request, { params }) {
  let { id } = await params;

  let jobIdx = data.findIndex((obj) => {
    return obj.id === id;
  });

  let job = data[jobIdx];

  let { location } = await request.json();

  let editedJob = { ...job, location };

  data[jobIdx] = editedJob;

  await writeFile("jobsData.json", JSON.stringify(data, null, 2));

  return Response.json(editedJob);
}

// deleting a specific job

export async function DELETE(_, { params }) {
  let { id } = await params;

  let jobIdx = data.findIndex((obj) => obj.id === id);

  data.splice(jobIdx, 1);

  await writeFile("jobsData.json", JSON.stringify(data, null, 2));

  return Response.json(
    { message: "Job successfully deleted" },
  );
}
