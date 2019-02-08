import React from 'react'
import {
  Container,
  FlexContainer,
  FlexItem,
  StyledButton,
  Splash,
  colors
} from '../components/Theme'

export default ({ title, children }) => (
  <Splash color={colors.white}>
    <Container>
      <FlexContainer margin="0 0 20px">
        <FlexItem>
          <h1>{title}</h1>
        </FlexItem>
        <FlexItem>
          <StyledButton
            background={colors.white}
            color={colors.dark}
            to="/register"
          >
            <h4>Register Today!</h4>
          </StyledButton>
        </FlexItem>
      </FlexContainer>
      <p>{children}</p>
    </Container>
  </Splash>
)
