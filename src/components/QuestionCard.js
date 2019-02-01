import React from 'react'
import styled from 'styled-components'

import { colors } from '../components/Theme'

const Container = styled.li`
  display: flex;
  width: 50%;
  margin: 0;
  padding: 10px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: 10px;
  h2 {
    color: ${colors.primary};
  }
`

const QuestionCard = ({ question, answer }) => (
  <Container>
    <Info>
      <h2>{question}</h2>
      <p>{answer}</p>
    </Info>
  </Container>
)
export default QuestionCard
