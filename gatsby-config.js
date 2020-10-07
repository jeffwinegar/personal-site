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
        root: __dirname,
        extentions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-93186602-1`,
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
