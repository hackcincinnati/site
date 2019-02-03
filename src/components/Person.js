import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { FlexItem, colors } from '../components/Theme'

const Info = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: 10px;
  text-align: center;
  p {
    font-size: 0.85em;
    line-height: 1em;
  }
  h3 {
    margin-bottom: 10px;
    color: ${colors.primary};
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
    <Info>
      <OutboundLink
        target="_blank"
        rel="noopener noreferrer"
        href={details.social.linkedin}
      >
        <StyledImage fluid={image} alt={details.name} />
      </OutboundLink>
      <h3>{details.name}</h3>
      <p>{details.position}</p>
    </Info>
  </FlexItem>
)
export default Person
