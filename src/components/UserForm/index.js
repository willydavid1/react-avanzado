/* eslint-disable react/jsx-handler-names */
import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, DivContainer, Error } from './styles'

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
        <Button type='submit' disabled={disabled}> {title} </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </DivContainer>
  )
}
