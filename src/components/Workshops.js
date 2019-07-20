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
import data from '../data.json'

const WorkshopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 2px 0;
`

const WorkshopTime = styled.p`
  font-weight: bold;
  color: ${colors.primary};
`
const WorkshopItem = ({ event }) => (
  <WorkshopContainer>
    <WorkshopTime>{event.time}</WorkshopTime>
    <p>{event.name}</p>
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
          <h3>Workshop Block #1</h3>
          {data.workshops.one.map((event, i) => (
            <WorkshopItem key={i} event={event} />
          ))}
        </FlexContent>
      </FlexItem>
      <FlexItem>
        <FlexContent margin="10px">
          <h3>Workshop Block #2</h3>
          {data.workshops.two.map((event, i) => (
            <WorkshopItem key={i} event={event} />
          ))}
        </FlexContent>
      </FlexItem>
    </FlexContainer>
  </Container>
)
