import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import SyntaxStyles from "../components/styles/SyntaxHighlightingStyles"
import SEO from "../components/SEO"
import PostMeta from "../components/PostMeta"
import IconArrow from "../assets/images/icon-arrow-left.inline.svg"

const StyledBackLink = styled(Link)`
  color: rgb(var(--text-accent-rgb));
  display: inline-block;
  font-size: 1rem;
  line-height: 1.25;
  padding-left: 1.0625em;
  position: relative;
  text-decoration-color: rgb(var(--text-accent-rgb) / 50%);

  svg {
    height: 1em;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    transition: transform 0.25s ease, text-decoration 0.25s ease;
    width: 1em;

    path {
      fill: currentColor;
    }
  }

  &:hover {
    text-decoration-color: currentColor;

    svg {
      transform: translate3d(-15%, -50%, 0);
    }
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
        mdxTitle
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

      <MDXProvider components={{ p: (props) => <React.Fragment {...props} /> }}>
        <div>
          <StyledBackLink to="/#some-thoughts">
            <IconArrow /> Back
          </StyledBackLink>
        </div>
        <header>
          <h1>
            <MDXRenderer>{post.frontmatter.mdxTitle}</MDXRenderer>
          </h1>
          <PostMeta
            metaData={{
              timeToRead: post.timeToRead,
              date: post.frontmatter.date,
            }}
          />
        </header>
      </MDXProvider>
      <MDXProvider components={{ Link }}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </>
  )
}

export default PostLayout
