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
import data from '../data'

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
const ScheduleItem = ({ event }) => (
  <ScheduleContainer>
    <ScheduleTime>{event.time}</ScheduleTime>
    <p>{event.name}</p>
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
          {data.schedule.saturday.map((event, i) => (
            <ScheduleItem key={i} event={event} />
          ))}
        </FlexContent>
      </FlexItem>
      <FlexItem>
        <FlexContent margin="10px">
          <h3>
            Sunday, July 21<sup>st</sup>
          </h3>
          {data.schedule.sunday.map((event, i) => (
            <ScheduleItem key={i} event={event} />
          ))}
        </FlexContent>
      </FlexItem>
    </FlexContainer>
  </Container>
)
