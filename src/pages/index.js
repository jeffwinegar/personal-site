import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Jeff Winegar" lang="en" />
      <p>
        Hi there. My name is Jeff Winegar. I'm a Frontend JavaScript Developer
        based in Southern California.
      </p>

      <p>I need to add more content here.</p>

      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
    </Layout>
  )
}

export default IndexPage
