import React from "react"

// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ path }) => {
  return (
    <>
      <SEO path={path} />
      <p>
        Hi there. My name is Jeff Winegar. I'm a Frontend JavaScript Developer
        based in Southern California.
      </p>

      <p>I need to add more content here.</p>

      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
    </>
  )
}

export default IndexPage
