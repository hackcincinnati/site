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

const TimelineContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 2px 0;
`

const TimelineTime = styled.p`
  font-weight: bold;
  color: ${colors.primary};
`
const TimelineItem = ({ time, event }) => (
  <TimelineContainer>
    <TimelineTime>{time}</TimelineTime>
    <p>{event}</p>
  </TimelineContainer>
)

export default () => (
  <Container>
    <h1>
      <ColorSpan>Schedule</ColorSpan>
    </h1>
    <FlexContainer justify="space-between" align="flex-start">
      <FlexItem>
        <FlexContent margin="10px">
          <h3>
            Saturday, July 20<sup>th</sup>
          </h3>
          <TimelineItem time="8:00am" event="Check-in Opens" />
          <TimelineItem time="9:00am" event="Opening Ceremony" />
          <TimelineItem time="10:00am" event="Hacking Begins" />
          <TimelineItem time="12:00pm" event="Lunch" />
          <TimelineItem time="6:00pm" event="Dinner" />
          <TimelineItem time="12:00am" event="Midnight Snack" />
        </FlexContent>
      </FlexItem>
      <FlexItem>
        <FlexContent margin="10px">
          <h3>
            Sunday, July 21<sup>st</sup>
          </h3>
          <TimelineItem time="7:00am" event="Breakfast" />
          <TimelineItem time="10:00am" event="Hacking Ends" />
          <TimelineItem time="10:10am" event="Judging Begins" />
          <TimelineItem time="11:00am" event="Finalist Presentations" />
          <TimelineItem time="11:45am" event="Judge Deliberation" />
          <TimelineItem time="12:00pm" event="Closing Ceremony" />
          <TimelineItem time="12:15pm" event="End of Hack Cincinnati" />
        </FlexContent>
      </FlexItem>
    </FlexContainer>
  </Container>
)
