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
    <footer>
      <p>email: github:</p>
      {author} &copy; {copyrightYearRange}
    </footer>
  )
}

export default Footer
