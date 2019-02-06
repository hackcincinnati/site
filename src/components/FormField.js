import React from 'react'
import styled from 'styled-components'
import { Field } from 'formik'

import { FlexItem, FlexContent, ColorSpan } from '../components/Theme'

const StyledField = styled(Field)`
  padding: 6px 12px;
`
const Error = ({ message }) => (
  <>
    <ColorSpan color="#ff0033"> &mdash; {message}</ColorSpan>
  </>
)

const FormField = ({ type, name, label, placeholder, error, ...props }) => {
  return (
    <FlexItem width="50%" mobileWidth="100%">
      <FlexContent>
        <label htmlFor={name}>
          {label}
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
