// LatestJobs.jsx
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import styles from "./latestJobs.module.css";

import Link from "next/link";

const jobs = [
  {
    id: 1,
    title: "SSC CGL 2025 Notification",
    organization: "Staff Selection Commission",
    location: "All India",
    posts: "15000+",
    lastDate: "25 Jan 2025",
    badge: "New",
    badgeColor: "success",
    description: "Combined Graduate Level Examination for various Group B and C posts"
  },
  {
    id: 2,
    title: "Railway Group D Recruitment 2025",
    organization: "Railway Recruitment Board",
    location: "All India",
    posts: "80,000",
    lastDate: "30 Jan 2025",
    badge: "Trending",
    badgeColor: "accent",
    description: "Recruitment for various Group D posts in Indian Railways"
  },
  {
    id: 3,
    title: "UPSC Civil Services Exam 2025",
    organization: "Union Public Service Commission",
    location: "All India",
    posts: "1000+",
    lastDate: "15 Feb 2025",
    badge: "Hot",
    badgeColor: "destructive",
    description: "Indian Administrative Service and allied services examination"
  },
  {
    id: 4,
    title: "IBPS PO Recruitment 2025",
    organization: "Institute of Banking Personnel Selection",
    location: "Pan India",
    posts: "5000+",
    lastDate: "20 Jan 2025",
    badge: "New",
    badgeColor: "success",
    description: "Probationary Officer positions in various public sector banks"
  },
  {
    id: 5,
    title: "Delhi Police Constable 2025",
    organization: "Delhi Police",
    location: "Delhi",
    posts: "7500",
    lastDate: "28 Jan 2025",
    badge: "Closing Soon",
    badgeColor: "warning",
    description: "Recruitment for Constable (Executive) positions in Delhi Police"
  },
  {
    id: 6,
    title: "DRDO Scientist Entry Test 2025",
    organization: "Defense Research & Development",
    location: "Multiple Locations",
    posts: "300+",
    lastDate: "10 Feb 2025",
    badge: "New",
    badgeColor: "success",
    description: "Scientist B entry test for various DRDO laboratories"
  },
];

export const LatestJobs = ({  }) => {
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Latest Job Openings</h2>
            <p className={styles.subtitle}>Fresh opportunities updated daily</p>
          </div>
          <button
            className={`${styles.viewAllBtn} ${styles.desktopOnly}`}
        
          >
            View All Jobs
            <ExternalLink className={styles.btnIcon} />
          </button>
        </div>

        <div className={styles.grid}>
          {jobs.map((job) => (
            <div key={job.id} className={styles.card}>
              <div className={styles.cardHeader}>
                
                <h3 className={styles.cardTitle}>{job.title}</h3>
                <p className={styles.organization}>{job.organization}</p>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.description}>{job.description}</p>

                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <MapPin className={styles.infoIcon} />
                    <span>{job.location}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <Users className={styles.infoIcon} />
                    <span>{job.posts} Vacancies</span>
                  </div>
                  <div className={`${styles.infoItem} ${styles.lastDate}`}>
                    <Calendar className={styles.calendarIcon} />
                    <span className={styles.dateText}>
                      Last Date: {job.lastDate}
                    </span>
                  </div>
                </div>

                <div className={styles.buttonGroup}>
                  <button
                    className={styles.applyBtn}
                  >
                    Apply Now
                  </button>

                  <Link  href={`/jobs/${job.id}`} className={styles.detailsBtn}>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.mobileViewAll}`}>
          <button
            className={styles.viewAllBtnMobile}
          >
            View All Jobs
            <ExternalLink className={styles.btnIcon} />
          </button>
        </div>
      </div>
    </section>
  );
};
