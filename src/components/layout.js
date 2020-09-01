import React from "react"
import styled from "styled-components"

import GlobalStyles from "./styles/GlobalStyles"
// import Header from "./header"
import Footer from "./footer"

const Wrapper = styled.div`
  display: flow-root;
  box-sizing: content-box;
  max-width: var(--maxWidth);
  padding: 0 1.0875rem 1.45rem;
  margin: 0 auto;

  > * {
    box-sizing: border-box;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {/* <Header /> */}
      <Wrapper>
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
