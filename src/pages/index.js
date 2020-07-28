import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// const timedGreeting = () => {
//   const curHr = new Date().getHours()

//   return curHr < 12
//     ? "Good Morning"
//     : curHr < 18
//     ? "Good Afternoon"
//     : "Good Evening"
// }

const IndexPage = () => {
  // const hello = timedGreeting()

  return (
    <Layout>
      <SEO title="Home" />
      <p>
        Hi there. My name is Jeff Winegar. I'm a Frontend JavaScript Developer
        based in Southern California.
      </p>

      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
    </Layout>
  )
}

export default IndexPage
