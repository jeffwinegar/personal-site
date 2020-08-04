import React from "react"
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
  return (
    <>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <main>{children}</main>
        email: github:
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
