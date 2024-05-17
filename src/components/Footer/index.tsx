import * as React from 'react'
import * as styles from './index.module.css'

import classNames from 'classnames'
import { useStaticQuery, graphql } from "gatsby"
import { FooterQuery } from '../../types'

interface SocialIconProps {
  className: string
  href: string
  label: string
}

const SocialIcon: React.FC<SocialIconProps> = (data) =>
  <a aria-label={data.label} href={data.href}>
    <i className={classNames(styles.svgIcon, data.className)}>
    </i>
  </a >

const Footer: React.FC = () => {
  const data: FooterQuery = useStaticQuery(graphql`
  query Footer {
    site {
      siteMetadata {
        social {
          github
          instagram
          linkedin
        }
      }
    }
  }
  `)

  return (<footer className={styles.footer}>
    <div className={styles.svgIconContainer}>
      <SocialIcon className={styles.github} href={`https://github.com/${data.site?.siteMetadata.social.github}`} label="Github"></SocialIcon>
      <SocialIcon className={styles.instagram} href={`https://instagram.com/${data.site?.siteMetadata.social.instagram}`} label="Instagram"></SocialIcon>
      <SocialIcon className={styles.linkedin} href={`https://www.linkedin.com/in/${data.site?.siteMetadata.social.linkedin}`} label="Linkedin"></SocialIcon>
    </div>
  </footer>)
}

export default Footer
