import React from 'react'
import { StyledOutboundLink, Container, Color } from '../components/Theme'

const Social = () => (
  <Container>
    <h3>Want to learn more?</h3>
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
)

export default Social
