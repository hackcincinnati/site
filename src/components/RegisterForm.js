import React from 'react'
import styled from 'styled-components'
import { breakpoints, colors } from '../components/Theme'

const StyledForm = styled.form`
  width: 100%;
  background-color: ${colors.light};
  color: ${colors.dark};
  padding: 20px;
  border-radius: 10px;
  @media (min-width: ${breakpoints.mobile}) {
    width: 45%;
  }
`

const StyledInput = styled.input`
  width: 100%;
  padding: 6px 12px;
  margin: 8px 0;
  box-sizing: border-box;
`

const StyledSelect = styled.select`
  margin: 8px 0;
  padding: 16px 20px;
`

const StyledSubmit = styled.input`
  margin: 8px 0;
  background-color: white;
  border: none;
  color: #00ab92;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
`

const RegisterForm = () => (
  <StyledForm name="preregister" method="POST" netlify data-netlify="true">
    <h3>Pre-Registration</h3>
    <input type="hidden" name="form-name" value="preregister" />
    <label htmlFor="fname">First Name: </label>
    <StyledInput type="text" name="fname" />
    <br />
    <label htmlFor="lname">Last Name: </label>
    <StyledInput type="text" name="lname" />
    <br />
    <label htmlFor="email">Email: </label>
    <StyledInput type="text" name="email" />
    <br />
    <label htmlFor="school">School: </label>
    <StyledInput type="text" name="school" />
    <br />
    <label htmlFor="city">City: </label>
    <StyledInput type="text" name="city" />
    <br />
    <label htmlFor="role">I am a: </label>
    <StyledSelect name="role">
      <option value="student">Student</option>
      <option value="student">Parent</option>
      <option value="teacher">Teacher</option>
      <option value="other">Other</option>
    </StyledSelect>
    <br />
    <StyledSubmit type="submit" text="Submit" />
  </StyledForm>
)

export default RegisterForm
