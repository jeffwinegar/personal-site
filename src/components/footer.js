import React from "react"

import { useSiteMetadata } from "./hooks/useSiteMetadata"

const currYear = new Date().getFullYear()

const Footer = () => {
  const { author, siteStartYear } = useSiteMetadata()
  const copyrightYearRange =
    siteStartYear !== currYear ? `${siteStartYear} - ${currYear}` : currYear
  return (
    <footer>
      {author} &copy; {copyrightYearRange}
    </footer>
  )
}

export default Footer
