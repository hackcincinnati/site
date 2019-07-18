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

const ScheduleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 2px 0;
`

const ScheduleTime = styled.p`
  font-weight: bold;
  color: ${colors.primary};
`
const ScheduleItem = ({ time, event }) => (
  <ScheduleContainer>
    <ScheduleTime>{time}</ScheduleTime>
    <p>{event}</p>
  </ScheduleContainer>
)

export default () => (
  <Container id="schedule">
    <h1>
      <ColorSpan>Schedule</ColorSpan>
    </h1>
    <FlexContainer justify="space-between" align="flex-start">
      <FlexItem>
        <FlexContent margin="10px">
          <h3>
            Saturday, July 20<sup>th</sup>
          </h3>
          <ScheduleItem time="8:00am" event="Check-in Opens" />
          <ScheduleItem time="9:00am" event="Opening Ceremony" />
          <ScheduleItem time="10:00am" event="Hacking Begins" />
          <ScheduleItem time="12:00pm" event="Lunch" />
          <ScheduleItem time="6:00pm" event="Dinner" />
          <ScheduleItem time="12:00am" event="Midnight Snack" />
        </FlexContent>
      </FlexItem>
      <FlexItem>
        <FlexContent margin="10px">
          <h3>
            Sunday, July 21<sup>st</sup>
          </h3>
          <ScheduleItem time="7:00am" event="Breakfast" />
          <ScheduleItem time="10:00am" event="Hacking Ends" />
          <ScheduleItem time="10:10am" event="Judging Begins" />
          <ScheduleItem time="11:00am" event="Finalist Presentations" />
          <ScheduleItem time="11:45am" event="Judge Deliberation" />
          <ScheduleItem time="12:00pm" event="Closing Ceremony" />
          <ScheduleItem time="12:15pm" event="End of Hack Cincinnati" />
        </FlexContent>
      </FlexItem>
    </FlexContainer>
  </Container>
)
