import React from 'react'

import { FlexItem, FlexContent, ColorSpan, colors } from '../components/Theme'

const QuestionCard = ({ question, answer }) => (
  <FlexItem padding="10px">
    <FlexContent>
      <h2>
        <ColorSpan color={colors.primary}>{question}</ColorSpan>
      </h2>
      <p>{answer}</p>
    </FlexContent>
  </FlexItem>
)
export default QuestionCard
