import React from 'react'

import Layout from '../components/Layout'
import Landing from '../components/Landing'
import Features from '../components/Features'
import Action from '../components/Action'
import Social from '../components/Social'
import Staff from '../components/Staff'
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
    <Features />
    <Action>
      Register today for a guaranteed spot in Hack Cincinnati &mdash; and a free
      T-shirt!
    </Action>
    <FAQs />
    <Staff />
    <Social />
  </Layout>
)

export default IndexPage
