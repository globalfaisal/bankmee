import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import MainNav from '../main-nav/main-nav'

import logoImgUrl from '../../assets/images/logo.svg'
import styles from './header.module.scss'

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const isMobileOrTablet = useMediaQuery({ maxDeviceWidth: 768 })

  console.log(isMobileOrTablet && isMobileNavOpen)
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
      <MainNav showMobileNav={isMobileOrTablet && isMobileNavOpen} />
    </header>
  )
}

export default Header
