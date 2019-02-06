import React from 'react'
import styled from 'styled-components'

import { Container, Splash, colors, breakpoints } from '../components/Theme'
import RegisterForm from '../components/RegisterForm'

const FlexContainer = styled.div`
  margin: 10px 0;
  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const StyledInfo = styled.div`
  width: 100%;
  @media (min-width: ${breakpoints.mobile}) {
    width: 45%;
  }
  h1 {
    color: ${colors.white};
  }
`

export default () => (
  <Splash position="50%">
    <Container>
      <FlexContainer>
        <StyledInfo>
          <h1>Pre-Register Today!</h1>
          <p>
            Sign up to be alerted when registration starts! By pre-registering
            now you'll guarantee your spot in Hack Cincinnati.
          </p>
        </StyledInfo>
        <RegisterForm />
      </FlexContainer>
    </Container>
  </Splash>
)
