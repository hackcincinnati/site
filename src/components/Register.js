import React from 'react'
import styled from 'styled-components'

import { Container, Color, colors, breakpoints } from '../components/Theme'
import RegisterForm from '../components/RegisterForm'

const FlexContainer = styled.div`
  margin: 10px 0;
  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 75px;
  }
`

const StyledInfo = styled.div`
  width: 100%;
  @media (min-width: ${breakpoints.mobile}) {
    width: 45%;
  }
`

export default () => (
      <Color color={colors.dark} background={colors.light}>
    <Container padding="0">
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
  </Color>
)
