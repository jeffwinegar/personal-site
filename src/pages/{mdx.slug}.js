import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SyntaxStyles from "../components/styles/SyntaxHighlightingStyles"

import SEO from "../components/SEO"
import PostMeta from "../components/PostMeta"

const shortcodes = { Link }

export const pageQuery = graphql`
  query GetPost($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      slug
      timeToRead
      fields {
        collection
      }
      frontmatter {
        title
        date
      }
    }
  }
`

const PostLayout = ({ data: { mdx: post } }) => {
  const slugPath = `/${post.slug}`

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        path={slugPath}
        description={post.excerpt}
        pageType={post.fields.collection}
      />
      <SyntaxStyles />

      <header>
        <h1>{post.frontmatter.title}</h1>
        <PostMeta
          metaData={{
            timeToRead: post.timeToRead,
            date: post.frontmatter.date,
          }}
        />
      </header>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </>
  )
}

export default PostLayout
