import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import PostMeta from "./PostMeta"

const StyledPost = styled.li`
  line-height: normal;

  & + & {
    margin-top: calc(1ex / (0.36 + 0.32));
  }

  & > * + * {
    margin-top: calc(1ex / (1.92 + 0.32));
  }

  span[role="img"] {
    line-height: 1;
  }
`

const StyledLink = styled(Link)`
  color: rgb(var(--text-accent-rgb));
  font-weight: 500;
  text-decoration-color: rgb(var(--text-accent-rgb) / 0);
  transition: text-decoration 0.25s ease;

  &:hover {
    text-decoration-color: currentColor;
  }
`

const PostsListing = () => {
  const data = useStaticQuery(graphql`
    query GetAllPosts {
      allMdx(
        filter: { fields: { collection: { eq: "posts" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            slug
            timeToRead
            frontmatter {
              mdxTitle
              date
            }
          }
        }
      }
    }
  `)
  const posts = data.allMdx.edges

  return (
    <MDXProvider components={{ p: (props) => <React.Fragment {...props} /> }}>
      <ul>
        {posts.map((post) => {
          const {
            id,
            slug,
            timeToRead,
            frontmatter: { mdxTitle, date },
          } = post.node

          return (
            <StyledPost key={id}>
              <StyledLink to={`/${slug}`}>
                <MDXRenderer>{mdxTitle}</MDXRenderer>
              </StyledLink>
              <PostMeta metaData={{ timeToRead: timeToRead, date: date }} />
            </StyledPost>
          )
        })}
      </ul>
    </MDXProvider>
  )
}

export default PostsListing
