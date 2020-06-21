import React from 'react'

import './layout.scss'

export const Layout = ({ children }) => (
  <div className="layout-wrapper">
    {/* TODO: Add feader component */}
    <main>{children}</main>
    {/* TODO: Add footer component */}
  </div>
)
