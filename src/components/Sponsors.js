import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import {
  FlexContainer,
  Container,
  ColorSpan,
  colors
} from '../components/Theme'
import Sponsor from '../components/Sponsor'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        zapier: file(relativePath: { eq: "sponsors/zapier.png" }) {
          ...sponsorImage
        }
        bank: file(relativePath: { eq: "sponsors/bank.png" }) {
          ...sponsorImage
        }
      }
    `}
    render={data => (
      <Container paddingTop="10px">
        <h2>
          <ColorSpan color={colors.accent}>Sponsors</ColorSpan>
        </h2>
        <FlexContainer>
          <Sponsor
            image={data.zapier.childImageSharp.fluid}
            link="https://zapier.com"
            name="Zapier"
          />
          <Sponsor
            image={data.bank.childImageSharp.fluid}
            link="https://hackclub.com/bank"
            name="Hack Club Bank"
          />
        </FlexContainer>
      </Container>
    )}
  />
)
