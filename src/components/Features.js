import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { Container } from '../components/Theme'
import Feature from '../components/Feature'

const StyledBackground = styled.div`
  width: 100%;
  background: linear-gradient(170deg, #fff 60%, #e5fcf5 0);
`

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_withWebp
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
      <StyledBackground>
        <Container>
          <Feature
            title="Our History"
            image={data.featureOne.childImageSharp.fluid}
            description="Last year, we ran CincyHacks, Cincinnati’s largest high school hackathon. CincyHacks was a massive success —  we had over 80 students present 16 different ideas. This year, we’re kicking it up a notch: we’re bringing in leaders from Hack Camp, Hack Chicago, McDonogh Hacks, and CodeDay to run an event for 300 high school programmers, hackers, and designers."
          />
          <Feature
            title="Our History"
            image={data.featureTwo.childImageSharp.fluid}
            description="As one of those 300 hackers, you’ll work in a team for 24 hours to create your own project — be it an app, game, or website. To help, we’ll provide free food, swag, mentorship, and workshops. At the end of the event, your team will present to a panel of judges for a chance to win some fabulous prizes."
            reversed
          />
          <Feature
            title="Our History"
            image={data.featureThree.childImageSharp.fluid}
            description="Last year, we ran CincyHacks, Cincinnati’s largest high school hackathon. CincyHacks was a massive success —  we had over 80 students present 16 different ideas. This year, we’re kicking it up a notch: we’re bringing in leaders from Hack Camp, Hack Chicago, McDonogh Hacks, and CodeDay to run an event for 300 high school programmers, hackers, and designers."
          />
        </Container>
      </StyledBackground>
    )}
  />
)
