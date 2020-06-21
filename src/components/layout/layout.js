import React from 'react'

import Header from '../header/header'

import '../../assets/styles/index.scss'
import './layout.scss'

const Layout = ({ children }) => (
  <div className="layout-wrapper">
    <Header />
    <main>{children}</main>
    {/* TODO: Add footer component */}
  </div>
)

export default Layout
