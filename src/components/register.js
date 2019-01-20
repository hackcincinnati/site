import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
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
  background-color: #00ab92;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
`

const Register = () => (
  <StyledForm name="preregister" method="POST" netlify data-netlify="true">
    <h3>Pre-Register Today!</h3>
    <input type="hidden" name="form-name" value="preregister" />
    <label for="fname">First Name: </label>
    <StyledInput type="text" name="fname" />
    <br />
    <label for="lname">Last Name: </label>
    <StyledInput type="text" name="lname" />
    <br />
    <label for="email">Email: </label>
    <StyledInput type="text" name="email" />
    <br />
    <label for="role[]">I am a: </label>
    <StyledSelect name="role[]">
      <option value="student">Student</option>
      <option value="student">Parent</option>
      <option value="teacher">Teacher</option>
      <option value="other">Other</option>
    </StyledSelect>
    <br />
    <StyledSubmit type="submit" text="Submit" />
  </StyledForm>
)

export default Register
