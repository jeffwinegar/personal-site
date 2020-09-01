import React from "react"

import { useSiteMetadata } from "./hooks/useSiteMetadata"

const currYear = new Date().getFullYear()

const Footer = () => {
  const { author, siteCopyrightYear } = useSiteMetadata()
  const copyrightYearRange =
    siteCopyrightYear !== currYear
      ? `${siteCopyrightYear} - ${currYear}`
      : currYear

  return (
    <footer style={{ fontSize: `1rem`, paddingTop: `calc(1ex / 0.32)` }}>
      {author} &copy; {copyrightYearRange}
    </footer>
  )
}

export default Footer
