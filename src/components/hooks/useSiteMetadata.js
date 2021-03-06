import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
          twitterHandle
          siteCopyrightYear
        }
      }
    }
  `)
  return site.siteMetadata
}
