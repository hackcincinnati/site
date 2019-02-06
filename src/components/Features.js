import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import {
  Container,
  ColorSpan,
  Splash,
  breakpoints,
  colors
} from '../components/Theme'
import Feature from '../components/Feature'
import info from '../data'

const StyledBackground = styled.div`
  width: 100%;
`

const CenterText = styled.div`
  text-align: center;
`

const ThinText = styled.span`
  font-weight: 100;
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
        featureOne: file(relativePath: { eq: "features/create.jpg" }) {
          ...fluidImage
        }
        featureTwo: file(relativePath: { eq: "features/learn.jpg" }) {
          ...fluidImage
        }
        featureThree: file(relativePath: { eq: "features/feature-3.jpg" }) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <>
        <Container>
          <Feature
            title={
              <React.Fragment>
                A hackathon is a place to{' '}
                <ColorSpan color={colors.primary}>create</ColorSpan>.
              </React.Fragment>
            }
            details="Working together with a team, you will have 24 hours to create something: website, app, game, anything. You’ll then present your creation to a panel of judges."
            image={data.featureOne.childImageSharp.fluid}
          />
          <Feature
            title={
              <React.Fragment>
                A hackathon is a place to{' '}
                <ColorSpan color={colors.accent}>learn</ColorSpan>.
              </React.Fragment>
            }
            details="For the beginner coders, we provide workshops. These workshops are designed so you can learn a new skill. For veteran hackers, industry programmers will be available as mentors. These mentors are a way to learn what happens in real life."
            image={data.featureTwo.childImageSharp.fluid}
            reversed
          />
          <Feature
            title={
              <React.Fragment>
                A hackathon is a place to{' '}
                <ColorSpan color={colors.primary}>have fun</ColorSpan>.
              </React.Fragment>
            }
            details="Meals, snacks, and swag are all provided — free of charge. Special breakouts are planned to give your mind (and fingers!) a break."
            image={data.featureThree.childImageSharp.fluid}
          />
        </Container>
      </>
    )}
  />
)
