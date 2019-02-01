import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { Container, breakpoints, colors } from '../components/Theme'
import Feature from '../components/Feature'
import info from '../data'

const StyledBackground = styled.div`
  width: 100%;
`

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        featureOne: file(relativePath: { eq: "features/feature-1.jpg" }) {
          ...fluidImage
        }
        featureTwo: file(relativePath: { eq: "features/feature-2.jpg" }) {
          ...fluidImage
        }
        featureThree: file(relativePath: { eq: "features/feature-3.jpg" }) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <Container>
        <Feature
          details={info.features.featureOne}
          image={data.featureOne.childImageSharp.fluid}
        />
        <Feature
          details={info.features.featureTwo}
          image={data.featureTwo.childImageSharp.fluid}
          color={colors.accent}
          reversed
        />
        <Feature
          details={info.features.featureThree}
          image={data.featureThree.childImageSharp.fluid}
        />
      </Container>
    )}
  />
)
