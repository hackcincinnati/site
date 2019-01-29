import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { Container, breakpoints, colors } from '../components/Theme'
import RegisterForm from '../components/RegisterForm'

const FlexContainer = styled.div`
  margin: 10px 0;
  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0 75px;
  }
`

const StyledInfo = styled.div`
  width: 100%;
  @media (min-width: ${breakpoints.mobile}) {
    width: 45%;
    margin-right: 10px;
  }
`

const StyledImage = styled(Img)`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "features/feature-4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <FlexContainer>
          <StyledInfo>
            <h1>Pre-Register Today!</h1>
            <p>
              Sign up to be alerted when registration starts! By pre-registering
              now you'll guarantee your spot in Hack Cincinnati.
            </p>
            <StyledImage fluid={data.image.childImageSharp.fluid} />
          </StyledInfo>
          <RegisterForm />
        </FlexContainer>
      </Container>
    )}
  />
)
