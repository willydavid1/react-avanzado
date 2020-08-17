/* eslint-disable react/jsx-handler-names */
import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, DivContainer, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <DivContainer>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input placeholder='Email' disabled={disabled} {...email} />
        <Input placeholder='Password' disabled={disabled} type='password' {...password} />
        <SubmitButton type='submit' disabled={disabled}> {title} </SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </DivContainer>
  )
}
