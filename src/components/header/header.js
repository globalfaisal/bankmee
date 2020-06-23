import React from 'react'
import { Link } from 'gatsby'

import MainNav from '../main-nav/main-nav'

import logoImgUrl from '../../assets/images/logo.svg'
import styles from './header.module.scss'

const Header = ({ mainMenuItems }) => (
  <header className={styles.header}>
    <Link to="/" className={styles.logo}>
      <img src={logoImgUrl} alt="logo" className={styles.logoImage} />
      <div className={styles.logoText}>bankmee</div>
    </Link>

    <MainNav mainMenuItems={mainMenuItems} />
  </header>
)

export default Header
