import React from 'react'
import styled from 'styled-components'
import { breakpoints, colors } from '../components/Theme'

const StyledForm = styled.form`
  width: 100%;
  margin: 0;
  padding: 20px;
  background-color: ${colors.white};
  color: ${colors.dark};
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

const RegisterForm = () => (
  <StyledForm name="preregister" method="POST" netlify data-netlify="true">
    <h3>Pre-Registration Form</h3>
    <input type="hidden" name="form-name" value="preregister" />
    <label htmlFor="name">Name: </label>
    <StyledInput type="text" name="name" autocomplete="name" required />
    <br />
    <label htmlFor="email">Email: </label>
    <StyledInput type="email" name="email" autocomplete="email" required />
    <br />
    <StyledSubmit type="submit" text="Submit" />
  </StyledForm>
)

export default RegisterForm
