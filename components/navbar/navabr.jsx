"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, User, Menu } from 'lucide-react';
import styles from './navbar.module.css';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <span className={styles.logoText}>RJ</span>
            </div>
            <div className={styles.logoContent}>
              <span className={styles.logoTitle}>Rojgar Portal</span>
              <span className={styles.logoSubtitle}>Government Jobs</span>
            </div>
          </Link>
          
          <nav className={styles.nav}>
            <Link 
              href="/" 
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/jobs" 
              className={`${styles.navLink} ${isActive('/jobs') ? styles.active : ''}`}
            >
              Latest Jobs
            </Link>
            <Link 
              href="/results" 
              className={`${styles.navLink} ${isActive('/results') ? styles.active : ''}`}
            >
              Results
            </Link>
            <Link 
              href="/admit-card" 
              className={`${styles.navLink} ${isActive('/admit-card') ? styles.active : ''}`}
            >
              Admit Card
            </Link>
            <Link 
              href="/syllabus" 
              className={`${styles.navLink} ${isActive('/syllabus') ? styles.active : ''}`}
            >
              Syllabus
            </Link>
          </nav>
        </div>

        <div className={styles.rightSection}>
          <button className={styles.iconButton} aria-label="Notifications">
            <Bell className={styles.icon} />
            <span className={styles.badge}>3</span>
          </button>
          
          <button className={styles.iconButton} aria-label="User profile">
            <User className={styles.icon} />
          </button>
          
          <button className={`${styles.iconButton} ${styles.mobileMenu}`} aria-label="Menu">
            <Menu className={styles.icon} />
          </button>
        </div>
      </div>
    </header>
  );
}