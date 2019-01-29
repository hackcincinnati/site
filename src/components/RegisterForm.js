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
  background-color: ${colors.primary};
  border: none;
  color: ${colors.white};
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  cursor: pointer;

  :hover,
  :focus,
  :active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`

const RegisterForm = () => (
  <StyledForm name="preregister" method="POST" netlify data-netlify="true">
    <h3>Pre-Registration</h3>
    <input type="hidden" name="form-name" value="preregister" />
    <label htmlFor="fname">First Name: </label>
    <StyledInput type="text" name="fname" required />
    <br />
    <label htmlFor="lname">Last Name: </label>
    <StyledInput type="text" name="lname" required />
    <br />
    <label htmlFor="email">Email: </label>
    <StyledInput type="email" name="email" required />
    <br />
    <label htmlFor="school">School: </label>
    <StyledInput type="text" name="school" required />
    <br />
    <label htmlFor="city">City: </label>
    <StyledInput type="text" name="city" required />
    <br />
    <label htmlFor="role">I am a: </label>
    <StyledSelect name="role" required>
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
