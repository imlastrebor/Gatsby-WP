// src/pages/index.js
import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPage.title}
      description={data.wordpressPage.excerpt}
    />
    <h1>{data.wordpressPage.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
  </Layout>
)
export default IndexPage
export const query = graphql`
  query {
    wordpressPage(title: { eq: "Home" }) {
      title
      excerpt
      content
    }
  }
`
