import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import IconStars from "../assets/images/icon-stars.inline.svg"
import IconForks from "../assets/images/icon-forks.inline.svg"

const GridContainer = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1em;
`
const StyledCard = styled.li`
  display: flex;
  flex-flow: column nowrap;
  align-content: stretch;
  font-size: 1rem;
  padding: 1em;
  border: 1px solid rgb(var(--border-rgb));
  border-radius: 4px;
`
const StyledCardTitle = styled.div`
  font-size: 1em;
  line-height: calc(1ex / 0.36);

  a {
    display: block;
    font-weight: 600;
    color: rgb(var(--text-accent-rgb));
    text-decoration-color: rgba(var(--text-accent-rgb), 0);
    transition: text-decoration 0.25s ease;

    &:hover {
      text-decoration-color: currentColor;
    }
  }
`
const StyledCardDescription = styled.p`
  flex: 1 0 auto;
  font-size: 0.875em;
  line-height: calc(1ex / 0.36);
  color: rgb(var(--text-secondary-rgb));
  margin: calc(1ex / 0.68) 0 calc(1ex / 0.48);
`
const StyledCardMeta = styled.p`
  font-size: 0.75em;
  line-height: calc(1ex / 0.32);

  > * {
    display: inline-block;

    &:not(:only-child):not(:last-child) {
      margin-right: 1em;
    }
  }

  svg {
    width: 1.1666666667em;
    height: 1.1666666667em;
    vertical-align: text-bottom;

    path {
      fill: currentColor;
    }
  }
`

const percentage = (val, total) =>
  `${Math.round((val / total) * 100 * 10) / 10 || 0}%`

const GithubRepos = () => {
  const data = useStaticQuery(graphql`
    query GetAllGithubRepos {
      githubData {
        data {
          user {
            repositories {
              edges {
                node {
                  id
                  name
                  description
                  url
                  forkCount
                  stargazers {
                    totalCount
                  }
                  languages {
                    totalSize
                    edges {
                      node {
                        id
                        name
                      }
                      size
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const repos = data.githubData.data.user.repositories.edges

  return (
    <GridContainer>
      {repos.map((repo) => (
        <GithubRepoCard key={repo.node.id} data={repo.node} />
      ))}
    </GridContainer>
  )
}

const GithubRepoCard = ({ data }) => {
  const repo = data
  const langTotal = repo.languages.totalSize

  return (
    <StyledCard>
      <StyledCardTitle>
        <a href={repo.url}>{repo.name}</a>
      </StyledCardTitle>

      <StyledCardDescription>{repo.description}</StyledCardDescription>

      <StyledCardMeta>
        {repo.languages.edges.map((lang) => (
          <span key={lang.node.id}>
            <span style={{ fontWeight: `600` }}>{lang.node.name}</span>{" "}
            {percentage(lang.size, langTotal)}
          </span>
        ))}
        {repo.stargazers.totalCount > 0 && (
          <span>
            <IconStars /> {repo.stargazers.totalCount}
          </span>
        )}
        {repo.forkCount > 0 && (
          <span>
            <IconForks /> {repo.forkCount}
          </span>
        )}
      </StyledCardMeta>
    </StyledCard>
  )
}

export default GithubRepos
