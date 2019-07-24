import React from 'react'

import Layout from '../components/Layout'
import Landing from '../components/Landing'
import Staff from '../components/Staff'
import Sponsors from '../components/Sponsors'
import FAQs from '../components/FAQs'
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
    <Landing />
    <FAQs />
    <Staff />
    <Sponsors />
  </Layout>
)

export default IndexPage
