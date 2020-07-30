import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledLink = styled(Link)`
  /* background-image: radial-gradient(
    ellipse 200% 100% at 55% 100%,
    rgb(247, 18, 160) 0%,
    rgb(121, 8, 177) 46%,
    rgb(33, 0, 127) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>
        <StyledLink
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </StyledLink>
      </h1>
    </div>
  </header>
)

export default Header
