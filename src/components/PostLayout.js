import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../components/SEO"

const shortcodes = { Link }

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      fields {
        slug
        collection
      }
      frontmatter {
        title
      }
    }
  }
`

const PostLayout = ({ data: { mdx: post } }) => {
  console.log(post)
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        path={post.fields.slug}
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
