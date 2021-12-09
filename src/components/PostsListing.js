import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import PostMeta from "./PostMeta"

const StyledPost = styled.li`
  & + & {
    margin-top: calc(1ex / (0.64 + 0.32));
  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  font-weight: 500;
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
            slug
            timeToRead
            frontmatter {
              title
              date
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
          slug,
          timeToRead,
          frontmatter: { title, date },
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
