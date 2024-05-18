import * as React from 'react'
import * as styles from './index.module.css'

import { Link } from 'gatsby'
import PostMetadata from '../PostMetadata';
import { GatsbyImage } from "gatsby-plugin-image";
import classNames from 'classnames'
import ImageWithMeta from '../ImageWithMeta'
import { ReactNode } from 'react'

interface BlogCardProps {
  title: string | ReactNode
  slug: string
  description?: string
  excerpt: string | ReactNode
  date: string
  tags: readonly string[]
  featuredImage?: ImageWithMeta
}

const BlogCard = (props: BlogCardProps) =>
  <Link className={classNames(styles.card, styles.blogCard)} to={props.slug}>
    {props.featuredImage && <GatsbyImage
      image={props.featuredImage.data}
      className={styles.cardImgContainer}
      alt={props.featuredImage.description} />}
    <article className={styles.cardBody}>
      <h2 className={styles.cardTitle}>{props.title}</h2>
      <p className={styles.cardText}>{props.description ?? props.excerpt}</p>
      <PostMetadata date={props.date} tags={props.tags} />
    </article>
  </Link>

export default BlogCard
