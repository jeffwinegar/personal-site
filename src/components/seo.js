import React from "react"
import { Helmet } from "react-helmet"

import { useSiteMetadata } from "./hooks/useSiteMetadata"

const SEO = ({ description, lang, keywords, title, url, path }) => {
  const {
    title: siteTitle,
    description: siteDescription,
    siteUrl,
    twitterHandle,
  } = useSiteMetadata()
  const metaLang = lang || `en`
  const metaDescription = description || siteDescription
  const metaTitle = title || siteTitle
  const metaUrl = url || siteUrl
  const metaKeywords = keywords || []
  const pagePath = path ? `${metaUrl}${path}` : metaUrl

  return (
    <Helmet
      htmlAttributes={{
        lang: metaLang,
      }}
      title={metaTitle}
      // titleTemplate={`%s - ${siteDescription}`}
      link={[
        {
          rel: `canonical`,
          href: pagePath,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: pagePath,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: twitterHandle,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:url`,
          content: pagePath,
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: `keywords`,
              content: metaKeywords.join(`, `),
            }
          : []
      )}
    />
  )
}

export default SEO
