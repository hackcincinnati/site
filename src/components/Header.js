import React from 'react'
import { Link } from 'gatsby'
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
  padding: 20px 10px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: left;
  }
`

const Info = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  h2 {
    color: ${colors.white};
    margin: 0;
  }
`

const StyledLogo = styled.img`
  width: 100%;
  max-width: 200px;
  margin: 0;
`

const Landing = () => (
  <Splash>
    <Container>
      <Link to="/">
        <StyledLogo src={logo} alt="Hack Cincinnati's Official Logo" />
      </Link>
      <Info>
        <h2>The Midwest’s largest high school hackathon.</h2>
      </Info>
    </Container>
  </Splash>
)

export default Landing
