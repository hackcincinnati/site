import React from 'react'
import {
  Container,
  ColorSpan,
  FlexContainer,
  FlexItem,
  FlexContent,
  colors
} from '../components/Theme'

import styled from 'styled-components'

const WorkshopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 2px 0;
`

const Workshoptitle = styled.p`
  font-weight: bold;
  color: ${colors.primary};
`
const WorkshopItem = ({ title, lead }) => (
  <WorkshopContainer>
    <Workshoptitle>{title}</Workshoptitle>
    <p>{lead}</p>
  </WorkshopContainer>
)

export default () => (
  <Container id="Workshop">
    <h1>
      <ColorSpan>Workshops</ColorSpan>
    </h1>
    <p>
      We know that you may not have any CS experience at all, so we’re teaching
      workshops! They’re awesome introductions to many interesting computer
      science concepts, skills, and languages. No experience needed!
    </p>
    <br />
    <FlexContainer justify="space-between" align="flex-start">
      <FlexItem>
        <FlexContent margin="10px">
          <WorkshopItem title="Intro to HTML/CSS" lead="Lachlan Campbell" />
          <WorkshopItem title="Intro to JavaScript" lead="Katherine Hu" />
          <WorkshopItem title="Intro to GitHub" lead="Ava Scherocman" />
          <WorkshopItem title="Intro to React.JS" lead="Megan Cui" />
          <WorkshopItem title="Intro to Netlify" lead="JAMstack" />
          <WorkshopItem title="How to Build a Full-Stack App" lead="Sean Kim" />
        </FlexContent>
      </FlexItem>
      <FlexItem>
        <FlexContent margin="10px">
          <WorkshopItem title="Intro to Python Development" lead="Cyber@UC" />
          <WorkshopItem title="Intro to Linux Computing" lead="Cyber@UC" />
          <WorkshopItem title="Intro to Capture the Flag" lead="Cyber@UC" />
          <WorkshopItem title="Intro to Video Game Hacking" lead="Cyber@UC" />
          <WorkshopItem title="Intro to Augmented Reality" lead="Sean Kim" />
          <WorkshopItem
            title="Demonstration of Wireless Attacks"
            lead="Cyber@UC"
          />
        </FlexContent>
      </FlexItem>
    </FlexContainer>
  </Container>
)
