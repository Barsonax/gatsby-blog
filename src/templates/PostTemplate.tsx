import * as React from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'

import { PostTemplateQuery } from '../types'
import Article from '../components/Article'
import BottomNav from '../components/BottomNav'
import BlogCard from '../components/BlogCard'
import { toImageWithMeta } from '../components/ImageWithMeta'
import { Helmet } from 'react-helmet'

interface PageTemplateQueryInterface {
  data: PostTemplateQuery
}

const PostTemplate = ({ data: { site, sitePage, markdownRemark } }: PageTemplateQueryInterface) => {
  if (!sitePage || !site || !markdownRemark) return (<></>);

  const disqusConfig = {
    url: `${site.siteMetadata.siteUrl + sitePage.path}`,
    identifier: sitePage.path,
    title: markdownRemark.frontmatter.title!,
  }
  const pageDescription = markdownRemark.frontmatter.description! || markdownRemark.excerpt!;
  return (
    <IndexLayout>

      <Helmet>
        <meta property="og:title" content={markdownRemark.frontmatter.title!} />
        <meta property="og:description" content={pageDescription} />
        <meta name="description" content={pageDescription} />
      </Helmet>

      <Article title={markdownRemark.frontmatter.title!}
        date={markdownRemark.frontmatter.date}
        excerpt={markdownRemark.html!}
        disqusConfig={disqusConfig}
        featuredImage={toImageWithMeta(markdownRemark.frontmatter.featuredImage)}>
      </Article>

      {sitePage.context.previous &&
        <BottomNav>
          <BlogCard
            title={sitePage.context.previous.frontmatter.title}
            slug={sitePage.context.previous.fields.slug}
            description={sitePage.context.previous.frontmatter.description!}
            excerpt={sitePage.context.previous.excerpt}
            date={sitePage.context.previous.frontmatter.date}
            categories={sitePage.context.previous.frontmatter.categories}
            featuredImage={toImageWithMeta(sitePage.context.previous.frontmatter.featuredImage)}>
          </BlogCard>
        </BottomNav>
      }
    </IndexLayout>
  )
}

export default PostTemplate

export const query = graphql`query PostTemplate($slug: String!) {
  site {
    siteMetadata {
      siteUrl
    }
  }
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    excerpt
    frontmatter {
      title
      description
      date(formatString: "D-MM-YYYY")
      featuredImage {
        description
        src {
          childImageSharp {
            gatsbyImageData(quality: 50, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
  sitePage(path: {eq: $slug}) {
    path
    context {
      previous {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "D-MM-YYYY")
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
  }
}
`
