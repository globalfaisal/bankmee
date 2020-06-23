import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import MainNav from '../main-nav/main-nav'
import logoImgUrl from '../../assets/images/logo.svg'
import styles from './header.module.scss'

import Overlay from '../overlay/overlay'

const Header = ({ mainMenuItems }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logoImgUrl} alt="logo" className={styles.logoImage} />
        <div className={styles.logoText}>bankmee</div>
      </Link>

      {isMobileOrTablet && (
        <div
          role="presentation"
          onClick={() => setIsMobileNavOpen(prevState => !prevState)}
          className={styles.navMenuToggler}
        >
          Menu
        </div>
      )}

      <MainNav
        showMobileNav={isMobileOrTablet && isMobileNavOpen}
        mainMenuItems={mainMenuItems}
      />
      {isMobileOrTablet && isMobileNavOpen && <Overlay />}
    </header>
  )
}

export default Header
