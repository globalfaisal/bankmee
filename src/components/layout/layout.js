import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '../header/header'

import '../../assets/styles/index.scss'
import './layout.scss'

const Layout = ({ children }) => {
  const menu = useStaticQuery(graphql`
    query GetMenus {
      wpgraphql {
        menus {
          nodes {
            slug
            menuItems {
              nodes {
                label
                url
              }
            }
          }
        }
        generalSettings {
          url
        }
      }
    }
  `).wpgraphql

  // TODO: refactor this
  const { url } = menu.generalSettings
  const mainMenuItems = menu.menus.nodes
    .filter(node => node.slug === 'primary')[0]
    .menuItems.nodes.map(item => ({
      label: item.label,
      url: item.url.replace(url, ''),
    }))

  return (
    <div className="layout-wrapper">
      <Header mainMenuItems={mainMenuItems} />
      <main>{children}</main>
      {/* TODO: Add footer component */}
    </div>
  )
}

export default Layout
