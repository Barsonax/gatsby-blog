import { queries } from "../algolia/algolia"
import environment from "../environment"

export const Config = {
  siteMetadata: {
    title: 'The Photogrammer',
    description: 'A blog about coding and photography',
    keywords: 'programming, photography',
    siteUrl: environment.URL,
    author: {
      name: 'Rick van Dam',
      url: 'https://github.com/barsonax'
    },
    social: {
      github: "Barsonax",
      instagram: "rickthephotogrammer",
      linkedin: "rick-van-dam-8369b264"
    }
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow"
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              aliases: {
                cs: "csharp",
                posh: "powershell"
              },
            }
          },
          `gatsby-plugin-catch-links`,
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/../../static/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/../../content`
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: environment.URL
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Photogrammer`,
        short_name: `Photogrammer`,
        start_url: `/`,
        background_color: `#ecedef`,
        theme_color: `#ecedef`,
        display: `standalone`,
        icon: `static/images/favicon.png`
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          runtimeCaching: [
            {
              // Use cacheFirst since these don't need to be revalidated (same RegExp
              // and same reason as above)
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: `CacheFirst`,
            },
            {
              // page-data.json files are not content hashed
              urlPattern: /^https?:.*\\page-data\/.*\/page-data\.json/,
              handler: `NetworkFirst`,
            },
            {
              // Add runtime caching of various other page resources
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: `StaleWhileRevalidate`,
            },
          ],
        }
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sitemap`,
      options:
      {
        output: "/"
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            // @ts-ignore
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              // @ts-ignore
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                    nodes {
                      excerpt
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                }
              }
            `,
            output: "/index.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `barsonaxblog`
      }
    },
    `gatsby-plugin-netlify`,
    ...(process.env.GATSBY_ALGOLIA_APP_ID ? [{
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    }] : []),
  ]
}
