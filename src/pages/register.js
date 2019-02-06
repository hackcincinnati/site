import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Register from '../components/Register'
import SEO from '../components/SEO'

const RegisterPage = () => (
  <Layout>
    <SEO
      title="Register"
      keywords={[
        `hack`,
        `cincinnati`,
        `programming`,
        `technology`,
        `coding`,
        `computer`,
        `science`,
        `computer science`
      ]}
    />
    <Header />
    <Register />
  </Layout>
)

export default RegisterPage
