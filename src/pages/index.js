import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header1 from "../components/header1"
import SEO from "../components/SEO"


const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Header1>
    <SEO title="PubQuiz"/>
    </Header1>
    
    {/* <Img  fluid = {data.allFile.edges[0].node.childImageSharp.fluid}/> */}
    {data.allFile.edges.map(({node})=>
      <Img key={node.id} fluid={node.childImageSharp.fluid}/>
    )}
    </div>
  
  )
}


export default IndexPage
export const query = graphql`
  {
    allFile(filter: {absolutePath: {regex: "//content/images/"}}) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
        }
      }
    }
  }
}
`

