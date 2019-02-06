import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { FlexItem, FlexContent, colors } from '../components/Theme'

const StyledFlexContent = styled(FlexContent)`
  text-align: center;

  p {
    font-size: 0.85em;
    line-height: 1em;
  }
  h3 {
    margin: 5px 0;
    color: ${colors.primary};
    line-height: 1.2em;
    word-spacing: 500px;
  }
`

const StyledImage = styled(Img)`
  border-radius: 50%;
  margin: 0 auto 10px;
  width: 110px;
`

export const staffImage = graphql`
  fragment staffImage on File {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const Person = ({ details, image }) => (
  <FlexItem width="170px" mobileWidth="50%">
    <StyledFlexContent>
      <OutboundLink
        target="_blank"
        rel="noopener noreferrer"
        href={details.social.linkedin}
      >
        <StyledImage fluid={image} alt={details.name} />
      </OutboundLink>
      <h3>{details.name}</h3>
      <p>{details.position}</p>
    </StyledFlexContent>
  </FlexItem>
)
export default Person
