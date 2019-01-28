import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Landing from '../components/Landing'
import { colors, breakpoints, GlobalStyles } from '../components/Theme'

const Container = styled.div`
  margin: 0 auto;
  max-width: ${breakpoints.desktop};
  padding: 0px 10px 10px;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Landing />
    <Container>{children}</Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
