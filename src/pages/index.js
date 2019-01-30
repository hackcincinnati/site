import React from 'react'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Register from '../components/Register'
import Social from '../components/Social'
import Staff from '../components/Staff'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
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
    <Features />
    <Staff />
    <Register />
    <Social />
  </Layout>
)

export default IndexPage
