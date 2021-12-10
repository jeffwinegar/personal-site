require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Jeff Winegar`,
    description: `Frontend Web Developer`,
    siteUrl: process.env.GATSBY_URL || `http://localhost:8000`,
    author: `Jeff Winegar`,
    twitterHandle: `@jeff_winegar`,
    siteCopyrightYear: 2010,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              maintainCase: false,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              offsetY: `100`,
              elements: [`h2`, `h3`, `h4`],
            },
          },
          {
            resolve: `gatsby-remark-shiki-twoslash`,
            options: {
              theme: `../../spacegray-vscode/themes/base16-ocean.dark`,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/assets/images`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GATSBY_GITHUB_API_TOKEN,
        graphQLQuery: `query ($author: String = "", $userFirst: Int = 0, $userOrderBy: String = "", $langFirst: Int = 0) {
          user(login: $author) {
            repositories(first: $userFirst, orderBy: {field: $userOrderBy, direction: DESC} privacy: PUBLIC, isFork: false) {
              edges {
                node {
                  id
                  name
                  description
                  url
                  forkCount
                  stargazers {
                    totalCount
                  }
                  languages(first: $langFirst, orderBy: {field: SIZE, direction: DESC}) {
                    edges {
                      node {
                        id
                        name
                      }
                      size
                    }
                    totalSize
                  }
                }
              }
            }
          }
        }`,
        variables: {
          author: `jeffwinegar`,
          userFirst: 4,
          userOrderBy: `STARGAZERS`,
          langFirst: 5,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `jeffwinegar.com`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Jeff Winegar Site`,
    //     short_name: `jeffwinegar`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `${__dirname}/src/assets/images/favicon.svg`, // This path is relative to the root of the site.
    //     legacy: false,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
