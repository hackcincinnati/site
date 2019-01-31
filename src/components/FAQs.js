import React from 'react'
import styled from 'styled-components'

import { Container } from '../components/Theme'
import QuestionCard from '../components/QuestionCard'
import info from '../data'

export const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
`

export default () => (
  <Container padding="10px">
    <h1>FAQs</h1>
    <FlexContainer>
      {info.faqs.map(question => (
        <QuestionCard details={question} key={question.question} />
      ))}
    </FlexContainer>
  </Container>
)
