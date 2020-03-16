import * as React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import { BlogListerQuery } from '../../types'
import BlogCard from '../BlogCard'
import { toImageWithMeta } from '../ImageWithMeta'

export const ComponentQuery = graphql`
  query BlogLister {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(posts)/" }, frontmatter: { draft: { ne: true } } }
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
                fluid(quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        excerpt
      }
    }
  }
`
interface BlogListerProps {
  category: string[];
}

const BlogLister: React.FC<BlogListerProps> = (props) => (
  <StaticQuery
    query={ComponentQuery}
    render={(data: BlogListerQuery) => (
      <>
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
                featuredImage={toImageWithMeta(post.frontmatter.featuredImage)}
              />
            )
          }
        })}
      </>
    )}
  />
)

export default BlogLister
