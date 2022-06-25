import React from 'react'
import { Menu, Button, type MenuProps, ActionIcon } from '@mantine/core'

interface IMenuComponentProps extends Omit<MenuProps, 'control'> {
	icon?: React.ReactNode
	label?: string|React.ReactNode
}

const MenuComponent = ({ children, icon, label, ...props }: IMenuComponentProps) => {
	let control

	if(icon && !label) {
		control = <ActionIcon>{ icon }</ActionIcon>
	} else if(icon || label) {
		control = <Button>{ icon && icon }{ label && label }</Button>

		return <Menu control={ control } { ...props }>{ children }</Menu>
	}

	return <Menu { ...props }>{ children }</Menu>
}

MenuComponent.Item = Menu.Item

export default MenuComponent
