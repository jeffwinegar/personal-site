import React from "react"

const currYear = new Date().getFullYear()

const Footer = ({ siteAuthor, siteStartYear }) => {
  const copyrightYearRange =
    siteStartYear !== currYear ? `${siteStartYear} - ${currYear}` : currYear
  return (
    <footer>
      {siteAuthor} &copy; {copyrightYearRange}
    </footer>
  )
}

export default Footer
