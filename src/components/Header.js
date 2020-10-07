import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { useSiteMetadata } from "./hooks/useSiteMetadata"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 1.45rem 1.0875rem;
`
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

const Header = () => {
  const { title } = useSiteMetadata()
  return (
    <header>
      <Wrapper>
        <h1>
          <StyledLink
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {title}
          </StyledLink>
        </h1>
      </Wrapper>
    </header>
  )
}

export default Header
