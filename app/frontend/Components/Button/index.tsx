import React from 'react'
import { ButtonProps } from 'react-html-props'
import './button.css'

const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button { ...props }>{ children }</button>
	)
}

export default Button

export { default as EditButton } from './EditButton'
export { default as DeleteButton } from './DeleteButton'
export { default as CheckinButton } from './CheckinButton'
export { default as CheckoutButton } from './CheckoutButton'
