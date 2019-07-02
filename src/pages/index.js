import React from 'react'

import Layout from '../components/Layout'
import Landing from '../components/Landing'
import Features from '../components/Features'
import Action from '../components/Action'
import Staff from '../components/Staff'
import Sponsors from '../components/Sponsors'
import Timeline from '../components/Timeline'
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
    <Features />
    <Action title="Ready to get started?">
      Register today for a guaranteed spot in Hack Cincinnati &mdash; and a free
      T-shirt!
    </Action>
    <Timeline />
    <FAQs />
    <Staff />
    <Sponsors />
    <Action title="Sound good?">
      Find us on{' '}
      <StyledOutboundLink href="https://facebook.com/hackcincinnati">
        Facebook
      </StyledOutboundLink>
      ,{' '}
      <StyledOutboundLink href="https://instagram.com/hackcincinnati">
        Instagram
      </StyledOutboundLink>
      , or{' '}
      <StyledOutboundLink href="https://twitter.com/hackcincinnati">
        Twitter
      </StyledOutboundLink>{' '}
      for more details and event updates! If you have any questions, please
      email us at{' '}
      <StyledOutboundLink href="mailto:team@hackcincinnati.io">
        team@hackcincinnati.io
      </StyledOutboundLink>
      .
    </Action>
  </Layout>
)

export default IndexPage
