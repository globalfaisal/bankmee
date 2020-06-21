import React from 'react'
import { Link } from 'gatsby'

import styles from './main-nav.module.scss'

const MainNav = ({ showMobileNav = false }) => (
  <nav
    className={`${styles.mainNav} ${
      showMobileNav ? styles.mobileMenuShown : styles.mobileMenuHidden
    }`}
  >
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link
          to="/"
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
        >
          Home
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          to="/about"
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
        >
          About
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          to="/contact"
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
        >
          Contact
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          to="/blog"
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
          partiallyActive
        >
          Blog
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          to="/careers"
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
        >
          Careers
        </Link>
      </li>
    </ul>
  </nav>
)

export default MainNav
