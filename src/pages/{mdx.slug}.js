import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import SyntaxStyles from "../components/styles/SyntaxHighlightingStyles"
import SEO from "../components/SEO"
import PostMeta from "../components/PostMeta"

const shortcodes = { Link }

const StyledBackLink = styled(Link)`
  display: inline-block;
  font-size: 1rem;
  line-height: 1.25;
  padding-left: 1rem;
  position: relative;

  &::before {
    content: "←";
    left: 0;
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    transition: transform 0.25s ease;
  }
  &:focus::before,
  &:hover::before {
    transform: translate3d(-15%, -50%, 0);
  }
`

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

      <div>
        <StyledBackLink to="/#some-thoughts">Back</StyledBackLink>
      </div>
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
