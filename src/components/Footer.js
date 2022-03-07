import React from "react"
import styled from "styled-components"

import { useSiteMetadata } from "./hooks/useSiteMetadata"
import { ThemeToggle } from "./ThemeToggle"

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
    <StyledFooter role="contentinfo">
      <div>
        <p>
          {author} &copy; {copyrightYearRange}
        </p>
        <ThemeToggle />
      </div>
    </StyledFooter>
  )
}

export default Footer
