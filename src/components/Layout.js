import React from "react"
import styled from "styled-components"

import GlobalStyles from "./styles/GlobalStyles"
import Footer from "./Footer"

const ContentContainer = styled.div`
  max-width: var(--maxWidth);
  padding: 0 1.0875rem;
  margin: 0 auto;
`
const ContentGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr fit-content(52ch) 1fr;
  padding-top: calc(1ex / 0.32);

  > *:not([class]),
  [class*="Callout"] {
    grid-column: 2;
  }
  > *[class]:not([class*="Callout"]) {
    grid-column: 1 / span 3;
  }

  ol {
    margin: calc(1ex / 0.64) 0;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ContentContainer>
        <ContentGrid>{children}</ContentGrid>
        <Footer />
      </ContentContainer>
    </>
  )
}

export default Layout
