import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 25px;
  @media (max-width: 500px) {
    display: inherit;
  }
`

const ImageDiv = styled.div`
  width: 40%;
  max-width: 250px;
  margin-right: 10px;
  @media (max-width: 500px) {
    width: 100%;
    margin-right: 0;
  }
`

const StyledImage = styled(Img)`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 0;
`

const Description = styled.p`
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
`

const Feature = ({ image, description }) => (
  <Container>
    <ImageDiv>
      <StyledImage fluid={image} alt="CincyHacks Students" />
    </ImageDiv>
    <Description>{description}</Description>
  </Container>
)
export default Feature
