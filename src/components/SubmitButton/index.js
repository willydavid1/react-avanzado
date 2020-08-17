import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, onClick, disabled, type = '' }) => {
  return <Button onClick={onClick} disabled={disabled} type={type}>{children}</Button>
}
