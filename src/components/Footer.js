import React from 'react'
import {
  StyledOutboundLink,
  colors,
  breakpoints,
  Color
} from '../components/Theme'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: ${breakpoints.desktop};
  padding: 20px 10px;
`

const Footer = () => (
  <Color background={colors.dark}>
    <Container>
      Web by{' '}
      <StyledOutboundLink href="https://daltoncraven.me">
        Dalton Craven
      </StyledOutboundLink>{' '}
      &#47;&#47; View Source on{' '}
      <StyledOutboundLink href="https://github.com/hackcincinnati/site">
        GitHub
      </StyledOutboundLink>
    </Container>
  </Color>
)
export default Footer
