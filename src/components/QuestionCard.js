import React from 'react'
import styled from 'styled-components'

const Container = styled.li`
  display: flex;
  width: 300px;
  margin: 0;
  padding: 10px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: 10px;
`

const QuestionCard = ({ details }) => (
  <Container>
    <Info>
      <h2>{details.question}</h2>
      <p>{details.answer}</p>
    </Info>
  </Container>
)
export default QuestionCard
