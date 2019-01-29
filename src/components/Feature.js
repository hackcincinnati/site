import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { breakpoints } from '../components/Theme'

const FlexContainer = styled.div`
  margin: 10px 0;
  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 25px 0 75px;
  }
`

const ImageDiv = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    ${props => (props.reversed ? 'margin-left' : 'margin-right')}: 50px;
  }
`

const StyledImage = styled(Img)`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 0;
  @media (min-width: ${breakpoints.mobile}) {
    width: 400px;
  }
`

const Description = styled.div`
  width: 100%;
  h3 {
    margin-bottom: 0;
    margin-top: 10px;
  }
  @media (min-width: ${breakpoints.mobile}) {
    order: ${props => (props.reversed ? '-1' : '0')};
    h3 {
      margin-bottom: inherit;
      margin-top: inherit;
    }
  }
`

const Feature = ({ title, image, description, reversed }) => (
  <FlexContainer>
    <ImageDiv reversed={reversed}>
      <StyledImage fluid={image} alt="CincyHacks Students" />
    </ImageDiv>
    <Description reversed={reversed}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Description>
  </FlexContainer>
)
export default Feature
