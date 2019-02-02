import React from 'react'

import {
  StyledOutboundLink,
  StyledHeading,
  Splash,
  Container,
  colors
} from '../components/Theme'

const Social = () => (
  <Splash>
    <Container>
      <StyledHeading color={colors.white} as="h3">
        Want to learn more?
      </StyledHeading>
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
