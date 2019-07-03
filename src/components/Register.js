import React from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import FormField, { Checkbox } from '../components/FormField'
import {
  Container,
  FlexContainer,
  ColorSpan,
  StyledButton,
  StyledOutboundLink,
  colors
} from '../components/Theme'

const REQUIRED_STRING = 'required'
const INVALID_NUMBER_STRING = 'must be a valid number'
const INVALID_EMAIL_STRING = 'must be a valid email'
const INVALID_PHONE_STRING = 'must be a valid phone'
const UNMATCHED_EMAIL_STRING = 'emails must be the same'
const PHONE_REGEX = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/

const HeaderDiv = styled.div`
  margin: 50px 10px 30px;
  h2 {
    margin-bottom: 0;
  }
`

function equalTo(ref, msg) {
  return this.test({
    name: 'equalTo',
    exclusive: false,
    // eslint-disable-next-line
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path
    },
    test: function(value) {
      return value === this.resolve(ref)
    }
  })
}
yup.addMethod(yup.string, 'equalTo', equalTo)

export default class RegistrationForm extends React.Component {
  state = {
    submitted: false
  }
  render() {
    const { submitted } = this.state

    return submitted ? (
      <Container>
        <h1 align="center">
          Thanks for registering!{' '}
          <span role="img" aria-label="Celebration emoji">
            🎉
          </span>
        </h1>
        <h3>
          <ColorSpan color={colors.accent}>Want to learn more?</ColorSpan>
        </h3>
        <p>
          Follow us on{' '}
          <StyledOutboundLink
            href="https://facebook.com/hackcincinnati"
            color={colors.primary}
          >
            Facebook
          </StyledOutboundLink>
          ,{' '}
          <StyledOutboundLink
            href="https://instagram.com/hackcincinnati"
            color={colors.primary}
          >
            Instagram
          </StyledOutboundLink>
          , or{' '}
          <StyledOutboundLink
            href="https://twitter.com/hackcincinnati"
            color={colors.primary}
          >
            Twitter
          </StyledOutboundLink>{' '}
          for more details and event updates!
        </p>
      </Container>
    ) : (
      <Container padding="10px">
        <HeaderDiv>
          <h1>
            <ColorSpan color={colors.primary}>Student Registration</ColorSpan>
          </h1>
          <p>
            Are you a parent, teacher, or mentor interested in Hack Cincinnati?
            Email us at{' '}
            <StyledOutboundLink href="mailto:team@hackcincinnati.io">
              team@hackcincinnati.io
            </StyledOutboundLink>{' '}
            to learn how you can get involved!
          </p>
        </HeaderDiv>
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            preferred_name: '',
            email: '',
            confirm_email: '',
            phone_number: '',
            school: '',
            grade: '',
            age: '',
            pronouns: '',
            shirt_size: '',
            travel: '',
            dietary_restrictions: '',
            referrer: '',
            note: '',
            emergency_email: '',
            emergency_phone: '',
            conduct: ''
          }}
          validationSchema={yup.object().shape({
            first_name: yup.string().required(REQUIRED_STRING),
            last_name: yup.string().required(REQUIRED_STRING),
            preferred_name: yup.string(),
            email: yup
              .string()
              .required(REQUIRED_STRING)
              .email(INVALID_EMAIL_STRING),
            confirm_email: yup
              .string()
              .required(REQUIRED_STRING)
              .email(INVALID_EMAIL_STRING)
              .equalTo(yup.ref('email'), UNMATCHED_EMAIL_STRING),
            phone_number: yup
              .string()
              .required(REQUIRED_STRING)
              .matches(PHONE_REGEX, INVALID_PHONE_STRING),
            school: yup.string().required(REQUIRED_STRING),
            grade: yup.string().required(REQUIRED_STRING),
            age: yup
              .number()
              .integer(INVALID_NUMBER_STRING)
              .required(REQUIRED_STRING),
            pronouns: yup.string().required(REQUIRED_STRING),
            shirt_size: yup.string().required(REQUIRED_STRING),
            travel: yup.string().required(REQUIRED_STRING),
            dietary_restrictions: yup.string(),
            referrer: yup.string().required(REQUIRED_STRING),
            note: yup.string(),
            emergency_email: yup
              .string()
              .required(REQUIRED_STRING)
              .email(INVALID_EMAIL_STRING),
            emergency_phone: yup
              .string()
              .matches(PHONE_REGEX, INVALID_PHONE_STRING)
              .required(REQUIRED_STRING),
            conduct: yup.boolean().required(REQUIRED_STRING)
          })}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(attendee, { setSubmitting }) => {
            setSubmitting(true)
            axios
              .post(
                'https://dash.zane.sh/api/v1/events/hack-cincinnati/attendees',
                {
                  attendee
                }
              )
              .then(res => {
                setSubmitting(false)
                if (res.status === 200) {
                  this.setState({ submitted: true })
                }
              })
          }}
        >
          {({ values, errors, handleChange, isSubmitting }) => (
            <Form>
              <HeaderDiv>
                <h2>
                  <ColorSpan color={colors.accent}>Student Details</ColorSpan>
                </h2>
                <p>Just the basic details about you!</p>
              </HeaderDiv>
              <FlexContainer justify="flex-start">
                <FormField
                  type="text"
                  name="first_name"
                  label="First Name"
                  autofill="given-name"
                  placeholder="Augusta"
                  error={errors.first_name}
                  value={values.first_name}
                  requiredField
                  width="40%"
                />
                <FormField
                  type="text"
                  name="last_name"
                  label="Last Name"
                  autofill="family-name"
                  placeholder="Lovelace"
                  error={errors.last_name}
                  value={values.last_name}
                  requiredField
                  width="40%"
                />
                <FormField
                  type="text"
                  name="preferred_name"
                  label="Preferred Name"
                  autofill="given-name"
                  placeholder="Ada"
                  error={errors.preferred_name}
                  value={values.preferred_name}
                  width="20%"
                />
                <FormField
                  type="email"
                  name="email"
                  label="Email"
                  autofill="email"
                  placeholder="ada@example.com"
                  error={errors.email}
                  value={values.email}
                  requiredField
                  width="40%"
                />
                <FormField
                  type="email"
                  name="confirm_email"
                  label="Confirm Email"
                  autofill="off"
                  placeholder="ada@example.com"
                  error={errors.confirm_email}
                  value={values.confirm_email}
                  requiredField
                  width="40%"
                />
                <FormField
                  type="tel"
                  name="phone_number"
                  label="Phone Number"
                  autofill="tel"
                  placeholder="513-555-5555"
                  error={errors.phone_number}
                  value={values.phone_number}
                  requiredField
                  width="20%"
                />
                <FormField
                  type="text"
                  name="school"
                  label="School"
                  placeholder="Hacking High School"
                  error={errors.school}
                  value={values.school}
                  requiredField
                  width="50%"
                />
                <FormField
                  type="select"
                  component="select"
                  name="grade"
                  label="Grade"
                  error={errors.grade}
                  value={values.grade}
                  requiredField
                  width="30%"
                >
                  <option value="" disabled>
                    Select grade
                  </option>
                  <option value="8">8th (Class of ’23)</option>
                  <option value="9">9th (Class of ’22)</option>
                  <option value="10">10th (Class of ’21)</option>
                  <option value="11">11th (Class of ’20)</option>
                  <option value="12">12th (Class of ’19)</option>
                </FormField>
                <FormField
                  type="number"
                  name="age"
                  label="Age"
                  placeholder="17"
                  min="1"
                  max="99"
                  error={errors.age}
                  value={values.age}
                  requiredField
                  width="20%"
                />
              </FlexContainer>
              <HeaderDiv>
                <h2>
                  <ColorSpan color={colors.accent}>
                    Emergency Contact Information
                  </ColorSpan>
                </h2>
                <p>
                  In case of emergency, we need to be able to reach your parent
                  or guardian.
                </p>
              </HeaderDiv>
              <FlexContainer justify="flex-start">
                <FormField
                  type="text"
                  name="emergency_email"
                  label="Emergency Contact Email"
                  placeholder="anne.byron@example.com"
                  error={errors.emergency_email}
                  value={values.emergency_email}
                  requiredField
                />
                <FormField
                  type="tel"
                  name="emergency_phone"
                  label="Emergency Contact Phone"
                  placeholder="513-555-5555"
                  error={errors.emergency_phone}
                  value={values.emergency_phone}
                  requiredField
                />
              </FlexContainer>
              <HeaderDiv>
                <h2>
                  <ColorSpan color={colors.accent}>
                    Additional Details
                  </ColorSpan>
                </h2>
                <p>
                  We have a bus to/from Chicago and Indianapolis. For more
                  details, see the{' '}
                  <StyledOutboundLink href="https://drive.google.com/open?id=1QGKkt3bkA5ArzQb2LdMqEGlMNXCPp9zv">
                    bus schedule
                  </StyledOutboundLink>
                  . If you'd like to take the bus, or for questions about other
                  assistance, please email us at{' '}
                  <StyledOutboundLink href="mailto:team@hackcincinnati.io">
                    team@hackcincinnati.io
                  </StyledOutboundLink>{' '}
                  and mark "interested in travel assistance" below.
                </p>
              </HeaderDiv>
              <FlexContainer justify="flex-start">
                <FormField
                  type="select"
                  component="select"
                  name="pronouns"
                  label="Pronouns"
                  error={errors.pronouns}
                  value={values.pronouns}
                  requiredField
                  width="35%"
                >
                  <option value="" disabled>
                    Select pronouns
                  </option>
                  <option value="She/her">She/her</option>
                  <option value="He/him">He/him</option>
                  <option value="They/them">They/them</option>
                  <option value="Prefer not to answer">
                    Prefer not to answer
                  </option>
                  <option value="Other">Other</option>
                </FormField>
                <FormField
                  type="select"
                  component="select"
                  name="shirt_size"
                  label="Shirt Size"
                  error={errors.shirt_size}
                  value={values.shirt_size}
                  requiredField
                  width="25%"
                >
                  <option value="" disabled>
                    Select shirt size
                  </option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </FormField>
                <FormField
                  type="select"
                  component="select"
                  name="travel"
                  label="Travel Assistance"
                  error={errors.travel}
                  value={values.travel}
                  requiredField
                  width="40%"
                >
                  <option value="" disabled>
                    Select travel plans
                  </option>
                  <option value="Attendee handles travel">
                    Handling my own travel
                  </option>
                  <option value="Interested in travel assistance">
                    Interested in travel assistance
                  </option>
                </FormField>
                <FormField
                  type="text"
                  name="dietary_restrictions"
                  label="Dietary Restrictions"
                  placeholder="Gluten free, vegan, etc."
                  error={errors.dietary_restrictions}
                  value={values.dietary_restrictions}
                />
                <FormField
                  type="text"
                  name="referrer"
                  label="How did you hear about us?"
                  autofill="off"
                  placeholder="Teacher, principal, friend’s name, etc."
                  error={errors.referrer}
                  value={values.referrer}
                  requiredField
                />
                <FormField
                  type="textarea"
                  component="textarea"
                  name="note"
                  label="Questions, comments, etc."
                  placeholder="Tell us your thoughts…"
                  details="(optional)"
                  error={errors.note}
                  value={values.note}
                  width="100%"
                />
                <Checkbox
                  type="checkbox"
                  name="conduct"
                  width="100%"
                  label={
                    <React.Fragment>
                      Do you agree to follow the Hack Cincinnati{' '}
                      <StyledOutboundLink href="https://github.com/hackcincinnati/site/blob/master/CODE_OF_CONDUCT.md">
                        Code of Conduct
                      </StyledOutboundLink>
                      ?
                    </React.Fragment>
                  }
                  error={errors.conduct}
                  value={values.conduct}
                  onChange={handleChange}
                  requiredField
                />
              </FlexContainer>
              <StyledButton
                as="button"
                margin="10px"
                type="submit"
                disabled={isSubmitting}
              >
                Submit Registration
              </StyledButton>
            </Form>
          )}
        </Formik>
      </Container>
    )
  }
}
