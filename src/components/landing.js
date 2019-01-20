import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'

const Hero = styled.div`
  width: 100vw;
  padding: 50px;
`

const Info = styled.div`
  padding: 0px 10px;
  margin: 0 auto;
  max-width: 800px;
`

const Landing = () => (
  <Hero>
    <Info>
      <Logo />
    </Info>
  </Hero>
)

export default Landing
