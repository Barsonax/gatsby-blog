import * as React from 'react'
import styles from './index.module.css'

import './prismhighlight.css'
import { Disqus } from 'gatsby-plugin-disqus'
import PostDate from '../PostDate'
import Image from 'gatsby-image'
import ImageWithMeta from '../ImageWithMeta'
import classNames from 'classnames'

interface DisqusConfig {
  url: string
  identifier: string
  title: string
}

interface ArticleProps {
  title: string
  date: string
  featuredImage?: ImageWithMeta
  excerpt: string
  disqusConfig: DisqusConfig
}

const Article: React.FC<ArticleProps> = (props) =>
  <div className={classNames(styles.content, styles.sideTextPadding)}>
    <article className={classNames(styles.post)}>
      <header className={styles.postHeader}>
        <h1 className={styles.postTitle}>
          {props.title}
        </h1>
        {props.date !== null && <PostDate date={props.date} className={styles.postDate}></PostDate>}
      </header>
      {props.featuredImage !== undefined && <Image fluid={props.featuredImage.data} alt={props.featuredImage.description} />}
      <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
      <Disqus config={props.disqusConfig} />
    </article>
  </div>

export default Article
