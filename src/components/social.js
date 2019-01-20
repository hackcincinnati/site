import React from 'react'
import styled from 'styled-components'

const StyledA = styled.a`
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
      <StyledA href="https://facebook.com/hackcincinnati">Facebook</StyledA>,{' '}
      <StyledA href="https://instagram.com/hackcincinnati">Instagram</StyledA>,{' '}
      or <StyledA href="https://twitter.com/hackcincinnati">Twitter</StyledA>{' '}
      for more details and pre-registration updates!
    </p>
  </div>
)

export default Social
