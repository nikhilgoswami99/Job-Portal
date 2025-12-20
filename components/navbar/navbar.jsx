"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, User, Menu, X } from "lucide-react";
import styles from "./navbar.module.css";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const handleMobileView = () => {
    setIsMenuOpen((prev) => !prev)
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Link href="/" className={`${ styles.logo}`}>
            <div className={styles.logoIcon}>
              <span className={styles.logoText}>RJ</span>
            </div>
            <div className={styles.logoContent}>
              <span className={styles.logoTitle}>Rojgar Portal</span>
            </div>
          </Link>

          <nav onClick={handleMobileView} id="main-navigation" className={` ${styles.nav} ${isMenuOpen ? styles.showNavbar : ""}`}>
            <Link
              href="/"
              className={`${styles.navLink} ${
                isActive("/") ? styles.active : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className={`${styles.navLink} ${
                isActive("/jobs") ? styles.active : ""
              }`}
            >
              Latest Jobs
            </Link>
            <Link
              href="/results"
              className={`${styles.navLink} ${
                isActive("/results") ? styles.active : ""
              }`}
            >
              Results
            </Link>
            <Link
              href="/admit-card"
              className={`${styles.navLink} ${
                isActive("/admit-card") ? styles.active : ""
              }`}
            >
              Admit Card
            </Link>
            <Link
              href="/syllabus"
              className={`${styles.navLink} ${
                isActive("/syllabus") ? styles.active : ""
              }`}
            >
              Syllabus
            </Link>
          </nav>
        </div>

        <div className={styles.rightSection}>
          <button
            onClick={handleMobileView}
            className={`${styles.iconButton} ${styles.mobileMenu}`}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"

          >
            {isMenuOpen ? (
              <X className={styles.icon} strokeWidth={2.75} />
            ) : (
              <Menu className={styles.icon} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
