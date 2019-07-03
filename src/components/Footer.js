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
  <Color background={colors.dark} color={colors.white}>
    <Container>
      Web by{' '}
      <StyledOutboundLink color={colors.primary} href="https://daltoncraven.me">
        Dalton Craven
      </StyledOutboundLink>{' '}
      &#47;&#47; View Source on{' '}
      <StyledOutboundLink
        color={colors.primary}
        href="https://github.com/hackcincinnati/site"
      >
        GitHub
      </StyledOutboundLink>{' '}
      &#47;&#47; Read{' '}
      <StyledOutboundLink
        color={colors.primary}
        href="https://github.com/hackcincinnati/site/blob/master/CODE_OF_CONDUCT.md"
      >
        Code of Conduct
      </StyledOutboundLink>
    </Container>
  </Color>
)
export default Footer
