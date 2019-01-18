import React from 'react'

import Layout from '../components/layout'
import Register from '../components/register'
import SEO from '../components/seo'

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
        `computer science`,
      ]}
    />
    <h2>Cincinnati's largest high-school hackathon</h2>
    <p>
      Hack Cincinnati is Cincinnati’s largest hackathon! Join hundreds of
      high-school programmers to show off your computer science skills by
      participating in this 24-hour event. It’s also all-inclusive — we have
      free food, swag, and prizes!
    </p>
    <p>
      Never coded before? Don’t worry! We’ve got workshops to help new coders
      that will jump-start your first project. With newcomers and veterans
      alike, Hack Cincinnati is a surefire way to create something amazing.
    </p>
    <Register />
  </Layout>
)

export default IndexPage
