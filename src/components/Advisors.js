import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { Container } from '../components/Theme'
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
        dalton: file(relativePath: { eq: "staff/advisors/dalton.jpg" }) {
          ...staffImage
        }
        megan: file(relativePath: { eq: "staff/temp.png" }) {
          ...staffImage
        }
        vikram: file(relativePath: { eq: "staff/advisors/vikram.jpg" }) {
          ...staffImage
        }
        alan: file(relativePath: { eq: "staff/advisors/alan.jpg" }) {
          ...staffImage
        }
        nick: file(relativePath: { eq: "staff/advisors/nick.jpg" }) {
          ...staffImage
        }
        mingjie: file(relativePath: { eq: "staff/advisors/mingjie.png" }) {
          ...staffImage
        }
        will: file(relativePath: { eq: "staff/advisors/will.jpg" }) {
          ...staffImage
        }
        mark: file(relativePath: { eq: "staff/temp.png" }) {
          ...staffImage
        }
        annie: file(relativePath: { eq: "staff/advisors/annie.jpg" }) {
          ...staffImage
        }
      }
    `}
    render={data => (
      <Container padding="10px">
        <h2>Advisors</h2>
        <FlexContainer>
          <Person
            details={info.advisors.dalton}
            image={data.dalton.childImageSharp.fixed}
          />
          <Person
            details={info.advisors.megan}
            image={data.megan.childImageSharp.fixed}
          />
          <Person
            details={info.advisors.vikram}
            image={data.vikram.childImageSharp.fixed}
          />
          <Person
            details={info.advisors.alan}
            image={data.alan.childImageSharp.fixed}
          />
          <Person
            details={info.advisors.nick}
            image={data.nick.childImageSharp.fixed}
          />
          <Person
            details={info.advisors.mingjie}
            image={data.mingjie.childImageSharp.fixed}
          />
          <Person
            details={info.advisors.will}
            image={data.will.childImageSharp.fixed}
          />
          <Person
            details={info.advisors.mark}
            image={data.mark.childImageSharp.fixed}
          />
          <Person
            details={info.advisors.annie}
            image={data.annie.childImageSharp.fixed}
          />
        </FlexContainer>
      </Container>
    )}
  />
)
