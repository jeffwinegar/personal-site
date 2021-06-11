import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import PostMeta from "./PostMeta"

const StyledPost = styled.li``

const StyledLink = styled(Link)`
  display: inline-block;
  font-weight: 600;
  color: rgb(var(--text-accent-rgb));
  text-decoration-color: rgba(var(--text-accent-rgb), 0);
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
            timeToRead
            frontmatter {
              title
              slug
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)
  const posts = data.allMdx.edges

  return (
    <ul>
      {posts.map((post) => {
        const {
          id,
          timeToRead,
          frontmatter: { slug, title, date },
        } = post.node

        return (
          <StyledPost key={id}>
            <StyledLink to={`/${slug}`}>{title}</StyledLink>
            <PostMeta metaData={{ timeToRead: timeToRead, date: date }} />
          </StyledPost>
        )
      })}
    </ul>
  )
}

export default PostsListing
