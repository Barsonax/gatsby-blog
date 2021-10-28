import * as React from 'react'
import * as styles from './index.module.css'
import { sidePadding } from '../shared.module.css'

import { useState, useEffect } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby'
import { MenuQuery } from '../../types'
import classNames from 'classnames'

export const ComponentQuery = graphql`
query Menu {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`

const Menu: React.FC = () => (
  <StaticQuery
    query={ComponentQuery}
    render={(data: MenuQuery) => {
      const [menuOpen, setMenuOpen] = useState(false);
      useEffect(() => {
        if (menuOpen) {
          document.body.classList.add(styles.noScroll);
        } else {
          document.body.classList.remove(styles.noScroll);
        }
      }, [menuOpen])

      return <nav className={classNames(styles.navBar, sidePadding)}>
        <h2 className={styles.navHeader}>
          <Link to="/" className={styles.navText}>{data.site?.siteMetadata.title}</Link>
        </h2>
        <div className={menuOpen ? classNames(styles.hamburgerMenu, styles.hamburgerMenuOpen) : styles.hamburgerMenu}>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-haspopup="true" aria-expanded={menuOpen} aria-controls="menu" aria-label="Menu">
            <span>
            </span>
            <span>
            </span>
          </button>
          <ul id="menu" className={styles.hamburgerMenuOverlay}>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/" className={styles.hamburgerMenuOverlayLink}>Home</Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/about-me/" className={styles.hamburgerMenuOverlayLink}>About Me</Link>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href="/categories/photography" className={styles.hamburgerMenuOverlayLink}>Photography</a>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href="/categories/programming" className={styles.hamburgerMenuOverlayLink}>Programming</a>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href="/index.xml" className={styles.hamburgerMenuOverlayLink}>rss</a>
            </li>
          </ul>
        </div>
      </nav >
    }}
  />
)

export default Menu
