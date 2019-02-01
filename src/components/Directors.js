import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { Color, StyledHeading, colors, Container } from '../components/Theme'
import Person from '../components/Person'
import info from '../data'

export const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        alishaan: file(relativePath: { eq: "staff/directors/alishaan.jpg" }) {
          ...staffImage
        }
        kabir: file(relativePath: { eq: "staff/directors/kabir.jpg" }) {
          ...staffImage
        }
        katherine: file(relativePath: { eq: "staff/directors/katherine.jpg" }) {
          ...staffImage
        }
        chris: file(relativePath: { eq: "staff/directors/chris.jpg" }) {
          ...staffImage
        }
        jack: file(relativePath: { eq: "staff/directors/jack.png" }) {
          ...staffImage
        }
      }
    `}
    render={data => (
      <Container padding="10px">
        <StyledHeading color={colors.primary} as="h2">
          Directors
        </StyledHeading>
        <FlexContainer>
          <Person
            details={info.directors.alishaan}
            image={data.alishaan.childImageSharp.fixed}
          />
          <Person
            details={info.directors.kabir}
            image={data.kabir.childImageSharp.fixed}
          />
          <Person
            details={info.directors.katherine}
            image={data.katherine.childImageSharp.fixed}
          />
          <Person
            details={info.directors.chris}
            image={data.chris.childImageSharp.fixed}
          />
          <Person
            details={info.directors.jack}
            image={data.jack.childImageSharp.fixed}
          />
        </FlexContainer>
      </Container>
    )}
  />
)
