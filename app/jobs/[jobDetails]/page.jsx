"use client"
import React from 'react';
import { Calendar, MapPin, Users, Clock, DollarSign, GraduationCap, FileText, ExternalLink } from "lucide-react";
import styles from './details.module.css';

const JobDetail = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={styles.page}>
      <main>
        {/* Header Section */}
        <div className={styles.hero}>
          <div className={styles.container}>
            <button onClick={handleBack} className={styles.backBtn}>
              ← Back to Jobs
            </button>
            
            <div className={styles.heroContent}>
              <div className={styles.heroLeft}>
                <div className={styles.badges}>
                  <span className={styles.badgeNew}>New</span>
                  <span className={styles.badgeOutline}>Full Time</span>
                </div>
                <h1 className={styles.title}>
                  SSC CGL 2025 Notification
                </h1>
                <p className={styles.organization}>
                  Staff Selection Commission
                </p>
                <div className={styles.metaInfo}>
                  <div className={styles.metaItem}>
                    <MapPin className={styles.metaIcon} />
                    <span>All India</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Users className={styles.metaIcon} />
                    <span>15000+ Vacancies</span>
                  </div>
                  <div className={`${styles.metaItem} ${styles.metaAccent}`}>
                    <Calendar className={styles.metaIconAccent} />
                    <span className={styles.metaTextAccent}>Last Date: 25 Jan 2025</span>
                  </div>
                </div>
              </div>
              
              <button className={styles.applyBtn}>
                <ExternalLink className={styles.applyIcon} />
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {/* Main Content */}
              <div className={styles.mainContent}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>Job Description</h2>
                  </div>
                  <div className={styles.cardContent}>
                    <p className={styles.description}>
                      Staff Selection Commission (SSC) has released the notification for Combined Graduate Level (CGL) Examination 2025. 
                      This examination is conducted for recruitment to various Group B and Group C posts in different Ministries/Departments/Organizations 
                      of the Government of India.
                    </p>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>Eligibility Criteria</h2>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.eligibilityItem}>
                      <h4 className={styles.eligibilityTitle}>
                        <GraduationCap className={styles.eligibilityIcon} />
                        Educational Qualification
                      </h4>
                      <p className={styles.eligibilityText}>
                        Bachelor's Degree from a recognized University or equivalent
                      </p>
                    </div>
                    <div className={styles.eligibilityItem}>
                      <h4 className={styles.eligibilityTitle}>Age Limit</h4>
                      <p className={styles.eligibilityText}>
                        18 to 30 years (Age relaxation as per government norms)
                      </p>
                    </div>
                    <div className={styles.eligibilityItem}>
                      <h4 className={styles.eligibilityTitle}>Nationality</h4>
                      <p className={styles.eligibilityText}>
                        Indian Citizen
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>Examination Pattern</h2>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.examStep}>
                      <div className={styles.stepNumber}>1</div>
                      <div>
                        <h4 className={styles.stepTitle}>Tier-I</h4>
                        <p className={styles.stepText}>Computer Based Examination (Objective Type)</p>
                      </div>
                    </div>
                    <div className={styles.examStep}>
                      <div className={styles.stepNumber}>2</div>
                      <div>
                        <h4 className={styles.stepTitle}>Tier-II</h4>
                        <p className={styles.stepText}>Computer Based Examination (Objective Type)</p>
                      </div>
                    </div>
                    <div className={styles.examStep}>
                      <div className={styles.stepNumber}>3</div>
                      <div>
                        <h4 className={styles.stepTitle}>Tier-III</h4>
                        <p className={styles.stepText}>Descriptive Paper (Pen and Paper Mode)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>How to Apply</h2>
                  </div>
                  <div className={styles.cardContent}>
                    <ol className={styles.stepsList}>
                      <li className={styles.stepsItem}>
                        <span className={styles.stepsNumber}>1.</span>
                        Visit the official website of SSC at ssc.nic.in
                      </li>
                      <li className={styles.stepsItem}>
                        <span className={styles.stepsNumber}>2.</span>
                        Click on the "Apply" link for CGL 2025
                      </li>
                      <li className={styles.stepsItem}>
                        <span className={styles.stepsNumber}>3.</span>
                        Register yourself if you are a new user
                      </li>
                      <li className={styles.stepsItem}>
                        <span className={styles.stepsNumber}>4.</span>
                        Fill in the application form with all required details
                      </li>
                      <li className={styles.stepsItem}>
                        <span className={styles.stepsNumber}>5.</span>
                        Upload photograph and signature as per specifications
                      </li>
                      <li className={styles.stepsItem}>
                        <span className={styles.stepsNumber}>6.</span>
                        Pay the application fee online
                      </li>
                      <li className={styles.stepsItem}>
                        <span className={styles.stepsNumber}>7.</span>
                        Submit the form and take a printout for future reference
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className={styles.sidebar}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>Important Dates</h2>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.dateRow}>
                      <span className={styles.dateLabel}>Start Date</span>
                      <span className={styles.dateValue}>05 Jan 2025</span>
                    </div>
                    <div className={styles.dateRow}>
                      <span className={styles.dateLabel}>Last Date</span>
                      <span className={`${styles.dateValue} ${styles.dateAccent}`}>25 Jan 2025</span>
                    </div>
                    <div className={styles.dateRow}>
                      <span className={styles.dateLabel}>Exam Date</span>
                      <span className={styles.dateValue}>March 2025</span>
                    </div>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>Job Overview</h2>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.overviewItem}>
                      <DollarSign className={styles.overviewIcon} />
                      <div>
                        <p className={styles.overviewLabel}>Salary</p>
                        <p className={styles.overviewValue}>₹25,000 - ₹81,000</p>
                      </div>
                    </div>
                    <div className={styles.overviewItem}>
                      <Clock className={styles.overviewIcon} />
                      <div>
                        <p className={styles.overviewLabel}>Job Type</p>
                        <p className={styles.overviewValue}>Permanent</p>
                      </div>
                    </div>
                    <div className={styles.overviewItem}>
                      <FileText className={styles.overviewIcon} />
                      <div>
                        <p className={styles.overviewLabel}>Application Mode</p>
                        <p className={styles.overviewValue}>Online</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.feeCard}>
                  <div className={styles.cardContent}>
                    <h3 className={styles.feeTitle}>Application Fee</h3>
                    <div className={styles.feeRow}>
                      <span className={styles.feeLabel}>General/OBC</span>
                      <span className={styles.feeValue}>₹100</span>
                    </div>
                    <div className={styles.feeRow}>
                      <span className={styles.feeLabel}>SC/ST/Female/PH</span>
                      <span className={styles.feeValue}>Nil</span>
                    </div>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <h3 className={styles.linksTitle}>Quick Links</h3>
                    <div className={styles.linksList}>
                      <button className={styles.linkBtn}>
                        <FileText className={styles.linkIcon} />
                        Official Notification
                      </button>
                      <button className={styles.linkBtn}>
                        <FileText className={styles.linkIcon} />
                        Download Syllabus
                      </button>
                      <button className={styles.linkBtn}>
                        <ExternalLink className={styles.linkIcon} />
                        Official Website
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobDetail;