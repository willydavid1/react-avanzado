import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const SubmitButton = ({ children, onClick, disabled, type = '' }) => {
  return <Button onClick={onClick} disabled={disabled} type={type}>{children}</Button>
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired // cualquier cosa que react puede renderizar
}
