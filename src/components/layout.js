/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import GlobalStyles from "./styles/GlobalStyles"
import Header from "./header"
import Footer from "./footer"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 0 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleAuthorStartYearQuery {
      site {
        siteMetadata {
          title
          author
          siteStartYear
        }
      }
    }
  `)

  const { title, author, siteStartYear } = data.site.siteMetadata

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={title} />
      <Wrapper>
        <main>{children}</main>
        email: github:
        <Footer siteAuthor={author} siteStartYear={siteStartYear} />
      </Wrapper>
    </>
  )
}

export default Layout
