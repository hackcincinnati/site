import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import FormField from '../components/FormField'
import { FlexContainer, ColorSpan, colors } from '../components/Theme'

const REQUIRED_STRING = 'required'
const INVALID_EMAIL_STRING = 'must be a valid email'

const HeaderDiv = styled.div`
  margin: 50px 10px 30px;
  h2 {
    margin-bottom: 0;
  }
`

const StyledSubmit = styled.input`
  background-color: ${colors.accent};
  border: none;
  color: ${colors.white};
  padding: 16px 32px;
  text-decoration: none;
  margin: 10px;
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: transform;
  cursor: pointer;
  :hover,
  :focus,
  :active {
    transform: scale(1.1);
  }
`

export default class RegistrationForm extends React.Component {
  state = {
    submitted: false
  }

  render() {
    const { submitted } = this.state

    return submitted ? (
      <div align="center">
        <h1>
          Thanks for registering!{' '}
          <span role="img" aria-label="Celebration emoji">
            🎉
          </span>
        </h1>
        <p>You should receive a confirmation email shortly.</p>
      </div>
    ) : (
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          pronouns: '',
          school: '',
          grade: '',
          shirt_size: '',
          dietary_restrictions: '',
          travel: '',
          emergency_email: '',
          emergency_phone: '',
          note: '',
          referrer: ''
        }}
        validationSchema={yup.object().shape({
          first_name: yup.string().required(REQUIRED_STRING),
          last_name: yup.string().required(REQUIRED_STRING),
          email: yup
            .string()
            .required(REQUIRED_STRING)
            .email(INVALID_EMAIL_STRING),
          phone_number: yup.string(),
          pronouns: yup.string().required(REQUIRED_STRING),
          school: yup.string().required(REQUIRED_STRING),
          grade: yup.string().required(REQUIRED_STRING),
          shirt_size: yup.string().required(REQUIRED_STRING),
          dietary_restrictions: yup.string(),
          travel: yup.string().required(REQUIRED_STRING),
          emergency_email: yup
            .string()
            .required(REQUIRED_STRING)
            .email(INVALID_EMAIL_STRING),
          emergency_phone: yup.string().required(REQUIRED_STRING),
          note: yup.string(),
          referrer: yup.string().required(REQUIRED_STRING)
        })}
        validateOnChange={false}
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

                /*FS.identify(attendee.email, {
                  displayName: `${attendee.first_name} ${attendee.last_name}`,
                  email: attendee.email,
                  school: attendee.school,
                  grade: attendee.grade,
                  referrer: attendee.referrer
                })*/
              }
            })
        }}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <HeaderDiv>
              <h2>
                <ColorSpan color={colors.primary}>Student Details</ColorSpan>
              </h2>
            </HeaderDiv>
            <FlexContainer>
              <FormField
                type="text"
                name="first_name"
                label="First Name"
                autofill="given-name"
                placeholder="Margaret"
                error={errors.first_name}
                value={values.first_name}
                onChange={handleChange}
              />
              <FormField
                type="text"
                name="last_name"
                label="Last Name"
                autofill="family-name"
                placeholder="Hamilton"
                error={errors.last_name}
                value={values.last_name}
                onChange={handleChange}
              />
              <FormField
                type="email"
                name="email"
                label="Email"
                autofill="email"
                placeholder="margaret@example.com"
                error={errors.email}
                value={values.email}
                onChange={handleChange}
              />
              <FormField
                type="tel"
                name="phone_number"
                label="Phone number"
                autofill="tel"
                placeholder="513-555-5555"
                error={errors.phone_number}
                value={values.phone_number}
                onChange={handleChange}
              />
              <FormField
                type="select"
                component="select"
                name="pronouns"
                label="Pronouns"
                error={errors.pronouns}
                value={values.pronouns}
                onChange={handleChange}
              >
                <option value="" default>
                  Select one
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
                type="text"
                name="school"
                label="School"
                placeholder="Hacking High School"
                error={errors.school}
                value={values.school}
                onChange={handleChange}
              />
              <FormField
                type="select"
                component="select"
                name="grade"
                label="Grade"
                error={errors.grade}
                value={values.grade}
                onChange={handleChange}
              >
                <option value="" default>
                  Select one
                </option>
                <option value="8">8th (Class of ’23)</option>
                <option value="9">9th (Class of ’22)</option>
                <option value="10">10th (Class of ’21)</option>
                <option value="11">11th (Class of ’20)</option>
                <option value="12">12th (Class of ’19)</option>
              </FormField>
              <FormField
                type="select"
                component="select"
                name="shirt_size"
                label="Shirt size"
                error={errors.shirt_size}
                value={values.shirt_size}
                onChange={handleChange}
              >
                <option value="" default>
                  Select one
                </option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </FormField>
              <FormField
                type="text"
                name="dietary_restrictions"
                label="Dietary restrictions"
                placeholder="(optional)"
                error={errors.dietary_restrictions}
                value={values.dietary_restrictions}
                onChange={handleChange}
              />
              <FormField
                type="select"
                component="select"
                name="travel"
                label="Travel method"
                error={errors.travel}
                value={values.travel}
                onChange={handleChange}
              >
                <option value="" default>
                  Select one
                </option>
                <option value="Attendee handles it">
                  Handling my own travel
                </option>
                <option value="Interested in travel reimbursement">
                  Interested in travel reimbursement
                </option>
              </FormField>
              <p>
                If you select travel reimbursement, we’ll contact you later if
                money is available.
              </p>
            </FlexContainer>
            <HeaderDiv>
              <h2>
                <ColorSpan color={colors.primary}>
                  Emergency Contact Information
                </ColorSpan>
              </h2>
              <p>
                In case of emergency, we need to be able to reach your parent or
                guardian.
              </p>
            </HeaderDiv>
            <FlexContainer>
              <FormField
                type="text"
                name="emergency_email"
                label="Emergency contact email"
                placeholder="janet.hamilton@example.com"
                error={errors.emergency_email}
                value={values.emergency_email}
                onChange={handleChange}
              />
              <FormField
                type="tel"
                name="emergency_phone"
                label="Emergency contact phone number"
                placeholder="513-555-5555"
                error={errors.emergency_phone}
                value={values.emergency_phone}
                onChange={handleChange}
              />
            </FlexContainer>
            <HeaderDiv>
              <h2>
                <ColorSpan color={colors.primary}>Additional Details</ColorSpan>
              </h2>
            </HeaderDiv>
            <FlexContainer>
              <FormField
                type="text"
                name="referrer"
                label="How did you hear about us?"
                autofill="off"
                placeholder="Teacher, principal, friend’s name, etc"
                error={errors.referrer}
                value={values.referrer}
                onChange={handleChange}
              />
              <FormField
                type="textarea"
                name="note"
                label="Questions, comments, etc"
                placeholder="Tell us your thoughts… (optional)"
                error={errors.note}
                value={values.note}
                onChange={handleChange}
              />
            </FlexContainer>
            <StyledSubmit
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              text="Submit Registration"
            />
          </form>
        )}
      </Formik>
    )
  }
}
