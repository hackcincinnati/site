import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const StyledA = styled.a`
  font-weight: bold;
  color: black;

  :hover {
    color: black;
  }
`

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
    <h2>Cincinnati's largest high-school hackathon!</h2>
    <p>
      Join hundreds of high-school programmers to show off your computer science
      skills by participating in this 24-hour event. It’s also all-inclusive —{' '}
      we have free food, swag, and prizes!
    </p>
    <p>
      Never coded before? Don’t worry! We’ve got workshops to help new coders
      that will jump-start your first project. With newcomers and veterans
      alike, Hack Cincinnati is a surefire way to create something amazing.
    </p>
    <h3>Want to learn more?</h3>
    <p>
      Follow us on{' '}
      <StyledA href="https://facebook.com/hackcincinnati">Facebook</StyledA>,{' '}
      <StyledA href="https://instagram.com/hackcincinnati">Instagram</StyledA>,
      or <StyledA href="https://twitter.com/hackcincinnati">Twitter</StyledA>{' '}
      for more details and pre-registration updates!
    </p>
  </Layout>
)

export default IndexPage
