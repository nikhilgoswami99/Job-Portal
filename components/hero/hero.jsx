// Hero.jsx
import React from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import styles from "./hero.module.css";

export const Hero  = () => {
  
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}></div>

          <h1 className={styles.title}>
            Find Your Dream{" "}
            <span className={styles.gradient}>Government Job</span>
          </h1>
        </div>
      </div>

      {/* Background Decoration */}
      <div className={styles.bgDecoration}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
      </div>
    </section>
  );
};
