import React from 'react'
import styled from 'styled-components'
import { Field } from 'formik'

import { FlexItem, FlexContent, ColorSpan, colors } from '../components/Theme'

const CheckboxLabel = styled.label`
  display: block;
  width: 100%;
  padding: 10px;
`

const StyledField = styled(Field)`
  appearance: none;
  padding: 6px 12px;
  border-radius: 5px;
  border: 1px solid ${colors.dark};
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primary};
  }
`

const Error = ({ message }) => (
  <>
    <ColorSpan color="#ff0033"> &mdash; {message}&nbsp;</ColorSpan>
  </>
)

export const Checkbox = ({
  name,
  label,
  requiredField,
  error,
  width,
  ...props
}) => {
  return (
    <CheckboxLabel htmlFor={name}>
      {label}
      {requiredField && !error && (
        <ColorSpan color="#ff0033"> *&nbsp;</ColorSpan>
      )}
      {error && <Error message={error} />}
      <input type="checkbox" id={name} name={name} {...props} />
    </CheckboxLabel>
  )
}

const FormField = ({
  type,
  name,
  label,
  requiredField,
  placeholder,
  error,
  width,
  ...props
}) => {
  return (
    <FlexItem width={width || '50%'} mobileWidth="100%" padding="10px">
      <FlexContent>
        <label htmlFor={name}>
          {label}
          {requiredField && !error && <ColorSpan color="#ff0033"> *</ColorSpan>}
          {error && <Error message={error} />}
        </label>
        <StyledField
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      </FlexContent>
    </FlexItem>
  )
}

export default FormField
