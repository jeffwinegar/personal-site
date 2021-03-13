import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../components/SEO"

const shortcodes = { Link }

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      fields {
        collection
      }
      frontmatter {
        slug
        title
      }
    }
  }
`

const PostLayout = ({ data: { mdx: post } }) => {
  const slugPath = `/${post.frontmatter.slug}`

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        path={slugPath}
        description={post.excerpt}
        pageType={post.fields.collection}
      />

      <h1>{post.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </>
  )
}

export default PostLayout
