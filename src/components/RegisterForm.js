import React from 'react'
import styled from 'styled-components'
import {
  StyledOutboundLink,
  Color,
  breakpoints,
  colors
} from '../components/Theme'

const StyledColor = styled(Color)`
  width: 100%;
  margin: 0;
  padding: 20px;
  border-radius: 10px;
  @media (min-width: ${breakpoints.mobile}) {
    width: 45%;
  }
  h3 {
    margin-bottom: 0;
  }
  p {
    margin-bottom: 20px;
  }
  form {
    margin-bottom: 0;
  }
`

const StyledInput = styled.input`
  width: 100%;
  padding: 6px 12px;
  margin: 8px 0;
  box-sizing: border-box;
  display: block;
`

const StyledSubmit = styled.input`
  margin: 8px 0;
  background-color: ${colors.accent};
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
  <StyledColor color={colors.dark} background={colors.white}>
    <h3>Student Pre-Registration</h3>
    <p>
      <small>
        Are you a parent, teacher, or mentor? Please{' '}
        <StyledOutboundLink href="mailto:team@hackcincinnati.io">
          contact
        </StyledOutboundLink>{' '}
        to us to learn how you can get involved, too!
      </small>
    </p>
    <form name="preregister" action="/" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="preregister" />
      <label htmlFor="name">Name: </label>
      <StyledInput
        type="text"
        name="name"
        id="name"
        autocomplete="name"
        required
      />
      <label htmlFor="email">Email: </label>
      <StyledInput
        type="email"
        name="email"
        id="email"
        autocomplete="email"
        required
      />
      <StyledSubmit type="submit" text="Submit" />
    </form>
  </StyledColor>
)

export default RegisterForm
