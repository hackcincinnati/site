import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { FlexItem, FlexContent } from '../components/Theme'

export const sponsorImage = graphql`
  fragment sponsorImage on File {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`

const StyledImage = styled(Img)`
  height: 100%;
  max-width: 200px;
`

const Sponsor = ({ image, link, name }) => (
  <FlexItem
    margin="0 50px"
    mobilePadding="0 10px"
    width="200px"
    mobileWidth="50%"
  >
    <FlexContent>
      <OutboundLink target="_blank" rel="noopener noreferrer" href={link}>
        <StyledImage fluid={image} alt={name} />
      </OutboundLink>
    </FlexContent>
  </FlexItem>
)
export default Sponsor
