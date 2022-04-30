import React from 'react'
import { ButtonProps } from 'react-html-props'

const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button { ...props }>{ children }</button>
	)
}

export default Button
