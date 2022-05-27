import React from "react"
import styled, { css } from "styled-components"

const StyledCallout = styled.aside`
  > * {
    font-style: italic;
    padding-left: 0.75em;

    ${(props) =>
      props.variant === "info" &&
      css`
        border-left: solid 0.25em rgb(var(--border-rgb));
        color: rgb(var(--text-secondary-rgb));
      `}
  }
`

const Callout = ({ variant = "info", children }) => {
  return <StyledCallout variant={variant}>{children}</StyledCallout>
}

export default Callout
