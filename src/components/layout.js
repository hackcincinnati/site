import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Landing from '../components/landing'
import './reset.css'

const Color = styled.div`
  width: 100vw;
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
