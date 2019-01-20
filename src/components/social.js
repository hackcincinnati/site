import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const StyledOutboundLink = styled(OutboundLink)`
  font-weight: bold;
  color: black;

  :hover {
    color: black;
  }
`

const Social = () => (
  <div>
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
  </div>
)

export default Social
