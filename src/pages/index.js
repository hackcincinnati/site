import React from 'react'

import Layout from '../components/Layout'
import Landing from '../components/Landing'
import Features from '../components/Features'
import Action from '../components/Action'
import Staff from '../components/Staff'
import Sponsors from '../components/Sponsors'
import Schedule from '../components/Schedule'
import Workshops from '../components/Workshops'
import FAQs from '../components/FAQs'
import SEO from '../components/SEO'

import { StyledOutboundLink } from '../components/Theme'

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
    <Schedule />
    <Workshops />
    <Action title="Ready to submit?&nbsp;">
      For accurate judging and voting, please submit your projects on Devpost!
      Make sure to also tag your teammates.
    </Action>
    <Sponsors />
    <Staff />
    <FAQs />
  </Layout>
)

export default IndexPage
