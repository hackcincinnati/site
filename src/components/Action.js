import React from 'react'
import {
  Container,
  FlexContainer,
  FlexItem,
  StyledOutboundButton,
  Splash,
  ColorSpan,
  colors
} from '../components/Theme'

export default ({ title, children }) => (
  <Splash color={colors.white}>
    <Container>
      <FlexContainer justify="flex-start" margin="0 0 20px">
        <FlexItem width="inherit">
          <h1>
            <ColorSpan color={colors.white}>{title}</ColorSpan>
          </h1>
        </FlexItem>
        <FlexItem width="inherit" margin="0 15px">
          <StyledOutboundButton
            background={colors.white}
            color={colors.dark}
            href="https://hackcincinnati.devpost.com/"
          >
            <h4>Submit Projects!</h4>
          </StyledOutboundButton>
        </FlexItem>
      </FlexContainer>
      <p>{children}</p>
    </Container>
  </Splash>
)
