import React from 'react'

import {
  StyledOutboundLink,
  ColorSpan,
  Splash,
  Container,
  colors
} from '../components/Theme'

const Social = () => (
  <Splash>
    <Container>
      <h3>
        <ColorSpan color={colors.white}>Want to learn more?</ColorSpan>
      </h3>
      <p>
        Follow us on{' '}
        <StyledOutboundLink href="https://facebook.com/hackcincinnati">
          Facebook
        </StyledOutboundLink>
        ,{' '}
        <StyledOutboundLink href="https://instagram.com/hackcincinnati">
          Instagram
        </StyledOutboundLink>
        , or{' '}
        <StyledOutboundLink href="https://twitter.com/hackcincinnati">
          Twitter
        </StyledOutboundLink>{' '}
        for more details and pre-registration updates!
      </p>
    </Container>
  </Splash>
)

export default Social
