// src/pages/index.js
import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = ({ data }) => (
  // console.log(
  //   data.allWordpressPost.edges.map(
  //     edge => edge.node.featured_media.localFile.childImageSharp.fixed
  //   )
  // ),

  <Layout>
    <SEO
      title={data.wordpressPage.title}
      description={data.wordpressPage.excerpt}
    />
    <h1>{data.wordpressPage.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />

    {data.allWordpressPost.edges.map(edge => (
      <Link to={`/post/${edge.node.slug}`} key={edge.node.id}>
        <div>
          <Img
            fixed={edge.node.featured_media.localFile.childImageSharp.fixed}
          />
        </div>
      </Link>
    ))}
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

    allWordpressPost {
      edges {
        node {
          title
          slug
          id
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 300, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
