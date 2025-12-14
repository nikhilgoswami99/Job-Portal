import Image from "next/image";
import styles from "./page.module.css";

import { Hero } from "@/components/hero/hero";
import { Categories } from "@/components/categories/categories";
import { LatestJobs } from "@/components/latestJobs/latestJobs";
import { fetchJobs } from "@/lib/utilities";

export default async function Home() { 
  let jobs = await fetchJobs();
  return <main>
    <Hero/>
    <Categories/>
    <LatestJobs jobs={jobs}/>
  </main>;
}
