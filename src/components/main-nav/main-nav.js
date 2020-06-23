import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import hamburgerIconUrl from '../../assets/images/icon-hamburger.svg'
import closeIconUrl from '../../assets/images/icon-close.svg'

import styles from './main-nav.module.scss'

const MainNav = ({ mainMenuItems }) => {
  const [toggle, setToggle] = useState(false)
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })

  if (!mainMenuItems) return null

  return (
    <nav className={styles.mainNav}>
      {isMobileOrTablet && (
        <>
          <div
            role="presentation"
            onClick={() => setToggle(prevState => !prevState)}
            className={styles.navMenuToggler}
          >
            <img src={toggle ? closeIconUrl : hamburgerIconUrl} alt="Menu" />
          </div>
        </>
      )}

      <ul
        className={`${styles.navMenus} ${
          isMobileOrTablet && !toggle ? styles.navMenusHidden : ''
        }`}
      >
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
}

export default MainNav
