import Image from "next/image";
import styles from "./page.module.css";

import { Hero } from "@/components/hero/hero";
import { Categories } from "@/components/categories/categories";
import { LatestJobs } from "@/components/latestJobs/latestJobs";

export default async function Home() {
  
  return <main>
    <Hero/>
    <Categories/>
    <LatestJobs/>
  </main>;
}
