import React from "react"
import styled from "styled-components"

import { useSiteMetadata } from "./hooks/useSiteMetadata"

const currYear = new Date().getFullYear()

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: calc(1ex / 0.64) 0;

  > * {
    width: 100%;
    max-width: 52ch;
  }

  p {
    font-size: 1rem;
  }
`

const Footer = () => {
  const { author, siteCopyrightYear } = useSiteMetadata()
  const copyrightYearRange =
    siteCopyrightYear !== currYear
      ? `${siteCopyrightYear} - ${currYear}`
      : currYear

  return (
    <StyledFooter>
      <div>
        <p>
          {author} &copy; {copyrightYearRange}
        </p>
      </div>
    </StyledFooter>
  )
}

export default Footer
