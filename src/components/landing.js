import React from 'react'
import styled from 'styled-components'

import image from '../images/primary-logo.svg'

const Hero = styled.div`
  width: 100vw;
  padding: 50px;
`

const Info = styled.div`
  padding: 0px 10px;
  margin: 0 auto;
  max-width: 800px;
`

const Logo = styled.img`
  width: 500px;
`

const Landing = () => (
  <Hero>
    <Info>
      <Logo src={image} />
    </Info>
  </Hero>
)

export default Landing
