import React from 'react'
import { Button, type ButtonProps } from '@mantine/core'

const ButtonComponent = ({ children, type = 'button', ...props }: ButtonProps<'button'>) => {
	return (
		<Button type={ type } { ...props }>{ children }</Button>
	)
}

export default ButtonComponent

export { default as EditButton } from './EditButton'
export { default as DeleteButton } from './DeleteButton'
export { default as CheckinButton } from './CheckinButton'
export { default as CheckoutButton } from './CheckoutButton'
export { default as ToggleColorSchemeButton } from './ToggleColorSchemeButton'

