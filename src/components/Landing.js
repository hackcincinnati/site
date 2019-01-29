import React from 'react'
import styled from 'styled-components'
import { breakpoints, colors, Color } from '../components/Theme'
import logo from '../images/logo-white.svg'

const Container = styled.div`
  padding: 25px;
  width: 100%;
  max-width: ${breakpoints.desktop};
  margin: 0 auto;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 50px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

const Info = styled.div`
  padding: 0px 10px;
  margin: 0 auto;
  text-align: center;
  h4 {
    margin-bottom: 0;
  }
`

const StyledLogo = styled.img`
  width: 100%;
  max-width: 350px;
  margin-bottom: 25px;
  @media (min-width: ${breakpoints.mobile}) {
    margin-right: 10px;
  }
`

const Landing = () => (
  <Color background={colors.primary} color={colors.white}>
    <Container>
      <StyledLogo src={logo} />
      <Info>
        <h3>The Midwest's largest high school hackathon.</h3>
        <h4>
          July 20<sup>th</sup>&ndash;21<sup>st</sup>
        </h4>
      </Info>
    </Container>
  </Color>
)

export default Landing
