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

const SocialIcon = (props: SocialIconProps) =>
  <a aria-label={props.label} href={props.href}>
    <i className={classNames(styles.svgIcon, props.className)}>
    </i>
  </a >

const Footer = () => {
  const data: FooterQuery = useStaticQuery(graphql`
  query Footer {
    site {
      siteMetadata {
        social {
          github
          linkedin
        }
      }
    }
  }
  `)

  return (<footer className={styles.footer}>
    <div className={styles.svgIconContainer}>
      <SocialIcon className={styles.github} href={`https://github.com/${data.site?.siteMetadata.social.github}`} label="Github"></SocialIcon>
      <SocialIcon className={styles.linkedin} href={`https://www.linkedin.com/in/${data.site?.siteMetadata.social.linkedin}`} label="Linkedin"></SocialIcon>
    </div>
  </footer>)
}

export default Footer
