import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from '../components/SEO'
import { Container, StyledLink } from '../components/Theme'

const NotFoundPage = () => (
  <Layout>
    <Header />

    <Container>
      <SEO title="404: Page Not Found" />
      <h1>NOT FOUND</h1>
      <p>
        You just hit a route that doesn&#39;t exist... you could{' '}
        <StyledLink to="/">return to home</StyledLink>.
      </p>
    </Container>
  </Layout>
)

export default NotFoundPage
