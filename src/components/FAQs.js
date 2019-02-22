import React, { Fragment } from 'react'

import {
  Container,
  FlexContainer,
  StyledOutboundLink,
  ColorSpan
} from '../components/Theme'
import QuestionCard from '../components/QuestionCard'

export default () => (
  <Container>
    <h1>
      <ColorSpan>FAQs</ColorSpan>
    </h1>
    <FlexContainer align="flex-start">
      <QuestionCard
        question="How long is Hack Cincinnati?"
        answer="You will have 24 hours to work on your projects at Hack Cincinnati. We will also have activities before and after the block of coding, so expect to be there from Saturday afternoon to Sunday evening."
      />
      <QuestionCard
        question="What should I bring?"
        answer="At the minimum, you'll need a student ID, laptop, and charger. We also recommend bringing a change of clothes, toiletries, and a sleeping bag or pillow. You won't be able to leave Hack Cincinnati after the event starts, so make sure you have any medications you'll need."
      />
      <QuestionCard
        question="Who can come to Hack Cincinnati?"
        answer="Any current high school student is welcome to come to Hack Cincinnati &mdash; all we ask is that you bring a school issued ID with you. Additionally, teachers and parents are welcome to come to the final awards ceremony."
      />
      <QuestionCard
        question="Do I need to know how to code?"
        answer="Hack Cincinnati is completely beginner friendly &mdash; coders of all skill levels are welcome to come learn or create something new!"
      />
      <QuestionCard
        question="Is Hack Cincinnati free?"
        answer="Yes, Hack Cincinnati is completely free. This includes meals, drinks, swag, and workshops."
      />
      <QuestionCard
        question="Is there a code of conduct?"
        answer={
          <Fragment>
            Yes. Please read our{' '}
            <StyledOutboundLink href="https://github.com/hackcincinnati/site/blob/master/CODE_OF_CONDUCT.md">
              Code of Conduct
            </StyledOutboundLink>{' '}
            carefully prior to attending.
          </Fragment>
        }
      />
    </FlexContainer>
  </Container>
)
