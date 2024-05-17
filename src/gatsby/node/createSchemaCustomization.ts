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
      instagram: String
      linkedin: String
    }

    type Author{
      name: String!
      url: String!
    }

    type SitePage{
      context: SitePageContext!
    }

    type SitePageContext{
      slug: String
      previous: MarkdownRemark
      next: MarkdownRemark
    }

    type SitePage implements Node {
      context: SitePageContext
    }
    type SitePageContext {
      category: String
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

        const regex = "/(/static/images/" + partialPath + ")/"
        const fileNode = await context.nodeModel.findAll({
          firstOnly: true,
          type: 'File',
          query: {
            filter: {
              absolutePath: {
                regex: regex
              }
            }
          }
        });

        if (!fileNode) {
          console.error(`Unable to resolve path ${partialPath} for context ${context.path}`)
          return null;
        }

        console.log(`Resolved path ${partialPath} to ${fileNode.absolutePath} for context ${context.path}`)
        return fileNode
      }
    })
  })
}
