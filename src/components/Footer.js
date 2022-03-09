import React from "react"
import styled from "styled-components"

import { useSiteMetadata } from "./hooks/useSiteMetadata"
import { ThemeToggle } from "./ThemeToggle"

const currYear = new Date().getFullYear()

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: calc(1ex / 0.64) 0;
`
const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 52ch;
  width: 100%;

  > div {
    display: flex;
    justify-content: flex-end;
    margin-top: calc(1ex / 0.64);
  }

  p {
    border-top: solid 1px rgb(var(--text-primary-rgb));
    font-size: 0.875rem;
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
      <StyledFooterContent>
        <div>
          <ThemeToggle />
        </div>
        <p>
          {author} &copy; {copyrightYearRange}
        </p>
      </StyledFooterContent>
    </StyledFooter>
  )
}

export default Footer
