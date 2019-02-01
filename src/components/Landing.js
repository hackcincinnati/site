import React from 'react'
import styled from 'styled-components'
import { Splash, breakpoints, colors } from '../components/Theme'
import logo from '../images/logo-white.svg'

export const Color = styled.div`
  width: 100vw;
  background: ${colors.primary};
  background: linear-gradient(
    -30deg,
    ${colors.primary} 55%,
    ${colors.primaryLight}
  );
  color: ${colors.white};
`

const Container = styled.div`
  padding: 25px;
  width: 100%;
  max-width: ${breakpoints.desktop};
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 50px 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const Info = styled.div`
  max-width: 500px;
  padding: 0px 10px;
  margin: 0 auto;
  text-align: center;
  h1 {
    color: ${colors.white};
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 0;
  }
`

const StyledLogo = styled.img`
  width: 100%;
  max-width: 300px;
`

const Landing = () => (
  <Splash position="20%">
    <Container>
      <StyledLogo src={logo} />
      <Info>
        <h1>The Midwest's largest high school hackathon.</h1>
        <p>
          July 20<sup>th</sup>&ndash;21<sup>st</sup>, 2019
        </p>
      </Info>
    </Container>
  </Splash>
)

export default Landing
