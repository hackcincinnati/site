import React from 'react'

import {
  StyledOutboundLink,
  StyledHeading,
  Splash,
  Container,
  colors
} from '../components/Theme'

const Social = () => (
  <Splash position="20%">
    <Container>
      <StyledHeading color={colors.white} as="h3">
        Want to learn more?
      </StyledHeading>
      <p>
        Follow us on{' '}
        <StyledOutboundLink
          href="https://facebook.com/hackcincinnati"
          color={colors.white}
        >
          Facebook
        </StyledOutboundLink>
        ,{' '}
        <StyledOutboundLink
          href="https://instagram.com/hackcincinnati"
          color={colors.white}
        >
          Instagram
        </StyledOutboundLink>
        , or{' '}
        <StyledOutboundLink
          href="https://twitter.com/hackcincinnati"
          color={colors.white}
        >
          Twitter
        </StyledOutboundLink>{' '}
        for more details and pre-registration updates!
      </p>
    </Container>
  </Splash>
)

export default Social
