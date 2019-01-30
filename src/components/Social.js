import React from 'react'

import {
  StyledOutboundLink,
  Container,
  Color,
  colors
} from '../components/Theme'

const Social = () => (
  <Color>
    <Container>
      <h3>Want to learn more?</h3>
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
  </Color>
)

export default Social
