// Footer.jsx
import React from 'react';
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <span className={styles.logoText}>RJ</span>
              </div>
              <div className={styles.brandInfo}>
                <span className={styles.brandName}>Rojgar Portal</span>
                <span className={styles.brandTagline}>Government Jobs</span>
              </div>
            </div>
            <p className={styles.description}>
              Your trusted platform for latest government job notifications, results, and admit cards.
            </p>
            <div className={styles.socialLinks}>
              <button className={styles.socialBtn}>
                <Facebook className={styles.socialIcon} />
              </button>
              <button className={styles.socialBtn}>
                <Twitter className={styles.socialIcon} />
              </button>
              <button className={styles.socialBtn}>
                <Youtube className={styles.socialIcon} />
              </button>
              <button className={styles.socialBtn}>
                <Instagram className={styles.socialIcon} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.link}>
                  Latest Jobs
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Results
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Admit Card
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Syllabus
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Answer Key
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className={styles.heading}>Categories</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.link}>
                  Banking Jobs
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Railway Jobs
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  SSC Jobs
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  UPSC Jobs
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  State Govt Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={styles.heading}>Stay Updated</h3>
            <p className={styles.newsletterText}>
              Subscribe to get latest job notifications directly in your inbox.
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
              />
              <button className={styles.subscribeBtn}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>© 2025 Rojgar Portal. All rights reserved.</p>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink}>
                Privacy Policy
              </a>
              <a href="#" className={styles.bottomLink}>
                Terms of Service
              </a>
              <a href="#" className={styles.bottomLink}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};