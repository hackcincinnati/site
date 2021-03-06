import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { breakpoints } from '../components/Theme'

const FlexContainer = styled.div`
  margin: 10px 0;
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 25px 0 75px;
  }
`

const ImageDiv = styled.div`
  @media (min-width: ${breakpoints.tablet}) {
    ${props => (props.reversed ? 'margin-left' : 'margin-right')}: 50px;
  }
`

const StyledImage = styled(Img)`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 0;
  @media (min-width: ${breakpoints.tablet}) {
    width: 400px;
  }
`

const Description = styled.div`
  width: 100%;
  @media (min-width: ${breakpoints.tablet}) {
    order: ${props => (props.reversed ? '-1' : '0')};
    h2 {
      margin-bottom: 20px;
      margin-top: 0;
    }
  }
`

const Feature = ({ title, details, image, reversed, color }) => (
  <FlexContainer>
    <ImageDiv reversed={reversed}>
      <StyledImage fluid={image} alt="CincyHacks Students" />
    </ImageDiv>
    <Description reversed={reversed}>
      <h2>{title}</h2>
      <p>{details}</p>
    </Description>
  </FlexContainer>
)
export default Feature
