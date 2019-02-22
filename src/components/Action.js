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
      <FlexContainer justify="flex-start" margin="0 0 20px">
        <FlexItem width="inherit">
          <h1>{title}</h1>
        </FlexItem>
        <FlexItem width="inherit" margin="0 15px">
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
