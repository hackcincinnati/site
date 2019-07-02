import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import {
  Container,
  ColorSpan,
  FlexContainer,
  colors
} from '../components/Theme'
import Person from '../components/Person'
import info from '../data'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        alishaan: file(relativePath: { eq: "staff/directors/alishaan.jpg" }) {
          ...staffImage
        }
        josh: file(relativePath: { eq: "staff/directors/josh.jpg" }) {
          ...staffImage
        }
        kabir: file(relativePath: { eq: "staff/directors/kabir.jpg" }) {
          ...staffImage
        }
        katherine: file(relativePath: { eq: "staff/directors/katherine.jpg" }) {
          ...staffImage
        }
        jack: file(relativePath: { eq: "staff/directors/jack.png" }) {
          ...staffImage
        }
      }
    `}
    render={data => (
      <Container>
        <h2>
          <ColorSpan color={colors.accent}>Directors</ColorSpan>
        </h2>
        <FlexContainer>
          <Person
            details={info.directors.alishaan}
            image={data.alishaan.childImageSharp.fluid}
            width="75%"
          />
          <Person
            details={info.directors.josh}
            image={data.josh.childImageSharp.fluid}
            width="75%"
          />
          <Person
            details={info.directors.kabir}
            image={data.kabir.childImageSharp.fluid}
            width="75%"
          />
          <Person
            details={info.directors.katherine}
            image={data.katherine.childImageSharp.fluid}
            width="75%"
          />
          <Person
            details={info.directors.jack}
            image={data.jack.childImageSharp.fluid}
            width="75%"
          />
        </FlexContainer>
      </Container>
    )}
  />
)
