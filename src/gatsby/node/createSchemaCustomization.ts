import { GatsbyNode } from "gatsby"

// @ts-ignore
export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = async ({ actions: { createFieldExtension, createTypes } }) => {
  const typeDefs = `
  type FeaturedImage @infer{
      src: File @fileByDataPath
      description: String
    }
    type Frontmatter @infer {
      title: String!
      categories: [String!]!
      tags: [String!]
      featuredImage: FeaturedImage
    }
    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter!
      fields: MarkdownRemarkFields!
      html: String!
    }
    type MarkdownRemarkFields {
      slug: String!
      title: String!
      layout: String!
    }

    type Site implements Node @infer {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata{
      title: String!
      siteUrl: String!
      description: String!
      keywords: String!
      author: Author!
      social: Social!
    }

    type Social{
      github: String
      linkedin: String
    }

    type Author{
      name: String!
      url: String!
    }

    type SitePage implements Node {
      context: SitePageContext!
    }

    type SitePageContext{
      slug: String
      category: [String!]
      previous: MarkdownRemark
      next: MarkdownRemark
    }
  `

  createTypes(typeDefs)

  // @ts-ignore
  createFieldExtension({
    name: 'fileByDataPath',
    extend: () => ({
      // @ts-ignore
      resolve: async function (featureImage, args, context, info) {

        let partialPath = featureImage.src
        if (!partialPath) {
          console.error("Unable to resolve path")
          return null
        }

        const fileNode = await context.nodeModel.findOne({
          type: 'File',
          query: {
            filter: {
              relativePath: {
                eq: partialPath
              }
            }
          }
        });
        if (!fileNode.absolutePath) {
          console.error(`Unable to resolve featureImage path ${partialPath} for context ${context.path}`)
          return null;
        }

        console.log(`Resolved featureImage path ${partialPath} to ${fileNode.absolutePath} for context ${context.path}`)
        return fileNode
      }
    })
  })
}
