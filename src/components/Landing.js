import React from 'react'
import styled from 'styled-components'

import {
  Splash,
  StyledOutboundButton,
  breakpoints,
  colors
} from '../components/Theme'
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

  @media (min-width: ${breakpoints.tablet}) {
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
  @media (min-width: ${breakpoints.tablet}) {
    text-align: left;
  }
  h1 {
    color: ${colors.white};
    margin-bottom: 10px;
    line-height: 1.25;
  }
  h4 {
    margin-bottom: 0;
  }
`

const StyledLogo = styled.img`
  width: 100%;
  max-width: 300px;
`

const Landing = () => (
  <Splash>
    <Container>
      <StyledLogo src={logo} alt="Hack Cincinnati's Official Logo" />
      <Info>
        <h1>The Midwest’s largest high school hackathon.</h1>
        <p>
          July 20<sup>th</sup>&ndash;21<sup>st</sup>, 2019
        </p>
        <StyledOutboundButton
          background={colors.white}
          color={colors.dark}
          href="https://hackcincinnati.devpost.com"
        >
          <h4>Submit Your Project!</h4>
        </StyledOutboundButton>
      </Info>
    </Container>
  </Splash>
)

export default Landing
