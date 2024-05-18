import * as React from 'react'
import * as styles from './index.module.css'

import './prismhighlight.css'
import PostMetadata from '../PostMetadata';
import { GatsbyImage } from "gatsby-plugin-image";
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
  tags: readonly string[]
  featuredImage?: ImageWithMeta
  excerpt: string
  disqusConfig: DisqusConfig
}

const Article = (props: ArticleProps) =>
  <div className={classNames(styles.content, styles.sideTextPadding)}>
    <article className={classNames(styles.post)}>
      <header className={styles.postHeader}>
        <h1 className={styles.postTitle}>
          {props.title}
        </h1>
        <PostMetadata date={props.date} tags={props.tags} />
      </header>
      {props.featuredImage && <GatsbyImage image={props.featuredImage.data} alt={props.featuredImage.description} />}
      <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
    </article>
  </div>

export default Article
