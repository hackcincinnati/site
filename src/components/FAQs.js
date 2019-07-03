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
        question="Where is Hack Cincinnati?"
        answer=<Fragment>
          Hack Cincinnati will be hosted in Cincinnati, Ohio, at the University
          of Cincinnati! We will be using the UC Campus Recreation Center,
          located at{' '}
          <StyledOutboundLink href="https://goo.gl/maps/z1tH5FxxEM3q7BJm7">
            2820 Bearcat Way, Cincinnati, OH 45221
          </StyledOutboundLink>
          .
        </Fragment>
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
        question="What should I bring?"
        answer="At the minimum, you'll need a student ID, laptop, and charger. We also recommend bringing a change of clothes, toiletries, and a sleeping bag or pillow. You won't be able to leave Hack Cincinnati after the event starts, so make sure you have any medications you'll need."
      />
      <QuestionCard
        question="Is there any travel assistance?"
        answer={
          <Fragment>
            A bus will be available for students travelling from Chicago or
            Indianapolis! For more details, see the{' '}
            <StyledOutboundLink href="https://drive.google.com/open?id=1QGKkt3bkA5ArzQb2LdMqEGlMNXCPp9zv">
              bus schedule
            </StyledOutboundLink>
            . If you'd like to take the bus, please email us at{' '}
            <StyledOutboundLink href="mailto:team@hackcincinnati.io">
              team@hackcincinnati.io
            </StyledOutboundLink>{' '}
            and mark "interested in travel assistance" on your registration.
            Unfortunately, no other travel assistance can be provided.
          </Fragment>
        }
      />
    </FlexContainer>
  </Container>
)
