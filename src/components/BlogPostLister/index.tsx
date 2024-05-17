import * as React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import { BlogListerQuery } from '../../types'
import BlogCard from '../BlogCard'
import { toImageWithMeta } from '../ImageWithMeta'

interface BlogListerProps {
  category: string[];
}

const BlogLister: React.FC<BlogListerProps> = (props) => {
  const data: BlogListerQuery = useStaticQuery(graphql`
  query BlogLister {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {fileAbsolutePath: {regex: "/(posts)/"},
      frontmatter: {draft: {ne: true}}}
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          draft
          date(formatString: "YYYY-MM-DD")
          categories
          description
          featuredImage {
            description
            src {
              childImageSharp {
                gatsbyImageData(quality: 50, layout: FULL_WIDTH)
              }
            }
          }
        }
        excerpt
      }
    }
  }`)

  return <>
    {data.allMarkdownRemark.nodes.map((post) => {
      if (post.frontmatter.draft !== true && props.category.every((x) => post.frontmatter.categories.includes(x))) {
        return (
          <BlogCard
            key={post.fields.slug}
            title={post.frontmatter.title!}
            slug={post.fields.slug}
            description={post.frontmatter.description!}
            excerpt={post.excerpt!}
            date={post.frontmatter.date}
            categories={post.frontmatter.categories}
            featuredImage={toImageWithMeta(post.frontmatter.featuredImage)} />
        )
      }
    })}
  </>
}

export default BlogLister
