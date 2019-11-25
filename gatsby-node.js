// @ts-check

'use strict'

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path')

exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions

  createFieldExtension({
    name: 'fileByDataPath',
    extend: () => ({
      resolve: function (featureImage, args, context, info) {
        const partialPath = featureImage.src
        if (!partialPath) {
          return null
        }
        const regex = "/(/static/" + partialPath + ")/"
        const fileNode = context.nodeModel.runQuery({
          firstOnly: true,
          type: 'File',
          query: {
            filter: {
              absolutePath: {
                regex: regex
              }
            }
          }
        })

        if (!fileNode) {
          return null
        }

        return fileNode
      }
    })
  })

  const typeDefs = `
    type MarkdownRemarkFrontmatterFeaturedImage @infer{
      src: File @fileByDataPath
    }
    type Frontmatter @infer {
      featureImage: MarkdownRemarkFrontmatterFeaturedImage
    }
    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter
    }
  `

  createTypes(typeDefs)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { layout } = node.frontmatter
      const slug = createFilePath({ node, getNode, basePath: `posts` });

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug.replace(/ /g, '-').toLowerCase() || ''
      })

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || ''
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `)

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw new Error(allMarkdown.errors)
  }
  //MarkdownRemarkFrontmatterResourcesFilterInput
  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields

    createPage({
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `layout` frontmatter in the Markdown.
      //
      // Feel free to set any `layout` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `page`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug
      }
    })
  })
}
