import React from "react"
import { Helmet } from "react-helmet"

import { useSiteMetadata } from "./hooks/useSiteMetadata"

const SEO = ({ description, lang, keywords, title, url, path, pageType }) => {
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
  const href = path ? `${metaUrl}${path}` : metaUrl

  return (
    <Helmet
      htmlAttributes={{
        lang: metaLang,
      }}
      title={metaTitle}
      titleTemplate={pageType ? `%s - ${siteTitle}` : `%s`}
      link={[
        // {
        //   rel: `icon`,
        //   href: `/favicon.svg`,
        //   type: `image/svg+xml`,
        // },
        // {
        //   rel: `alternate icon`,
        //   href: `/favicon.png`,
        //   type: `image/png`,
        // },
        // {
        //   rel: `mask-icon`,
        //   href: `safari-pinned-tab.svg`,
        //   color: `#000000`,
        // },
        {
          rel: `canonical`,
          href: href,
        },
      ]}
      meta={[
        {
          name: `theme-color`,
          content: `#ffffff`,
        },
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
          content: href,
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
          content: href,
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
