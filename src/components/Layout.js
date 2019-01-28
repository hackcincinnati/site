import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Landing from '../components/Landing'
import Footer from '../components/Footer'
import { breakpoints, GlobalStyles } from '../components/Theme'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Landing />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
