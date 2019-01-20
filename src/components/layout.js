import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

import Landing from '../components/landing'

import './reset.css'

const GlobalStyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cabin', sans-serif;
    font-weight: 900;
  }
  body {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }
`

const Color = styled.div`
  width: 100vw;
  min-height: 80vh;
  background: rgb(229, 252, 245);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(229, 252, 245, 1) 100%
  );
`

const Box = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0px 10px 10px;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Landing />
    <Color>
      <Box>{children}</Box>
    </Color>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
