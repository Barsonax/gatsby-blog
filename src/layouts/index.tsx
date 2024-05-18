import * as React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
import { IndexLayoutQuery } from '../types'
import * as styles from './index.module.css'
import './global.css';
import 'normalize.css'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

type Props = {
  children?: React.ReactNode
}

const IndexLayout = ({ children }: Props) => {

  const data: IndexLayoutQuery = useStaticQuery(graphql`
  query IndexLayout {
    site {
      siteMetadata {
        title
        description
        keywords
        siteUrl
      }
    }
    file(
      name: {eq: "favicon"}
      ext: {eq: ".png"}) {
      childImageSharp {
        original {
          src
        }
      }
    }
  }
  `)

  return <div className={styles.body}>
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={data.site?.siteMetadata.title}
    >
      <meta name="description" content={data.site?.siteMetadata.description} />
      <meta name="keywords" content={data.site?.siteMetadata.keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.site?.siteMetadata.title} />
      <meta property="og:description" content={data.site?.siteMetadata.description} />
      <meta property="og:image" content={data.site?.siteMetadata.siteUrl! + data.file?.childImageSharp?.original?.src} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
    </Helmet>
    <Menu></Menu>
    <main className={styles.main}>
      {children}
    </main>
    <Footer></Footer>
  </div>
}

export default IndexLayout
