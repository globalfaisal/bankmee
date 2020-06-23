import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './main-nav.module.scss'

const MainNav = ({ mainMenuItems, showMobileNav = false }) => {
  if (!mainMenuItems) return null

  return (
    <nav
      className={`${styles.mainNav} ${
        showMobileNav ? styles.mobileMenuShown : styles.mobileMenuHidden
      }`}
    >
      <ul className={styles.navList}>
        {mainMenuItems
          .filter(item => item.url !== '/')
          .map(item => (
            <>
              <li className={styles.navItem}>
                <Link
                  to={item.url}
                  className={styles.navLink}
                  activeClassName={styles.activeNavLink}
                >
                  {item.label}
                </Link>
              </li>
            </>
          ))}
      </ul>
    </nav>
  )
}
MainNav.propTypes = {
  mainMenuItems: PropTypes.array.isRequired,
  showMobileNav: PropTypes.bool,
}

export default MainNav
