import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import {
  FlexContainer,
  Container,
  ColorSpan,
  colors
} from '../components/Theme'
import Sponsor from '../components/Sponsor'

const sizes = {
  xs: '125px',
  small: '150px',
  medium: '175px',
  large: '200px',
  xl: '300px'
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        cengage: file(relativePath: { eq: "sponsors/cengage.png" }) {
          ...sponsorImage
        }
        fifththird: file(relativePath: { eq: "sponsors/fifththird.png" }) {
          ...sponsorImage
        }
        medium: file(relativePath: { eq: "sponsors/medium.png" }) {
          ...sponsorImage
        }
        getronics: file(relativePath: { eq: "sponsors/getronics.png" }) {
          ...sponsorImage
        }
        uc: file(relativePath: { eq: "sponsors/uc.png" }) {
          ...sponsorImage
        }
        nku: file(relativePath: { eq: "sponsors/nku.png" }) {
          ...sponsorImage
        }
        rstudio: file(relativePath: { eq: "sponsors/rstudio.png" }) {
          ...sponsorImage
        }
        keybank: file(relativePath: { eq: "sponsors/keybank.jpg" }) {
          ...sponsorImage
        }
        amazon: file(relativePath: { eq: "sponsors/amazon.png" }) {
          ...sponsorImage
        }
        jaybird: file(relativePath: { eq: "sponsors/jaybird.png" }) {
          ...sponsorImage
        }
        zapier: file(relativePath: { eq: "sponsors/zapier.png" }) {
          ...sponsorImage
        }
        bank: file(relativePath: { eq: "sponsors/bank.png" }) {
          ...sponsorImage
        }
        ultimate: file(relativePath: { eq: "sponsors/ultimate.png" }) {
          ...sponsorImage
        }
      }
    `}
    render={data => (
      <Container paddingTop="10px">
        <h2>
          <ColorSpan color={colors.accent}>Sponsors</ColorSpan>
        </h2>
        <FlexContainer margin="50px">
          <Sponsor
            image={data.cengage.childImageSharp.fluid}
            link="https://cengage.com"
            name="Cengage"
            size={sizes.xl}
          />
          <Sponsor
            image={data.uc.childImageSharp.fluid}
            link="https://uc.edu"
            name="University of Cincinnati"
            size={sizes.xl}
          />
        </FlexContainer>
        <FlexContainer margin="50px">
          <Sponsor
            image={data.fifththird.childImageSharp.fluid}
            link="https://53.com"
            name="5/3 Bank"
            size={sizes.medium}
          />
          <Sponsor
            image={data.getronics.childImageSharp.fluid}
            link="https://getronics.com"
            name="Getronics"
            size={sizes.large}
          />
        </FlexContainer>
        <FlexContainer margin="50px">
          <Sponsor
            image={data.medium.childImageSharp.fluid}
            link="https://medium.com"
            name="Medium"
            size={sizes.small}
          />
          <Sponsor
            image={data.nku.childImageSharp.fluid}
            link="https://nku.edu"
            name="Northern Kentucky University"
            size={sizes.small}
          />
          <Sponsor
            image={data.rstudio.childImageSharp.fluid}
            link="https://rstudio.com"
            name="RStudio"
            size={sizes.small}
          />
          <Sponsor
            image={data.keybank.childImageSharp.fluid}
            link="https://key.com"
            name="Key Bank"
            size={sizes.small}
          />
          <Sponsor
            image={data.amazon.childImageSharp.fluid}
            link="https://amazon.com"
            name="Amazon"
            size={sizes.small}
          />
          <Sponsor
            image={data.jaybird.childImageSharp.fluid}
            link="https://jaybirdsport.com"
            name="JayBird Headphones"
            size={sizes.small}
          />
          <Sponsor
            image={data.bank.childImageSharp.fluid}
            link="https://hackclub.com/bank"
            name="Hack Club Bank"
            size={sizes.small}
          />
          <Sponsor
            image={data.zapier.childImageSharp.fluid}
            link="https://zapier.com"
            name="Zapier"
            size={sizes.xs}
          />
          <Sponsor
            image={data.ultimate.childImageSharp.fluid}
            link="https://ultim8screenprinting.com"
            name="Ultimate Screen Printing"
            size={sizes.small}
          />
        </FlexContainer>
      </Container>
    )}
  />
)
