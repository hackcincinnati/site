import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const StyledImg = styled(Img)`
  width: 100%;
  max-width: 500px;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "primary-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => <StyledImg fluid={data.file.childImageSharp.fluid} />}
  />
)
