// import React from 'react'
// import { Menu, Button, type MenuProps, ActionIcon } from '@mantine/core'
// import MenuItem from './MenuItem'

// interface IMenuComponentProps extends Omit<MenuProps, 'control'> {
// 	icon?: JSX.Element
// 	label?: string|React.ReactNode
// }

// const MenuComponent = ({ children, icon, label, ...props }: IMenuComponentProps) => {
// 	let control

// 	if(icon && !label) {
// 		icon.props.size = 16
// 		control = <ActionIcon>{ icon }</ActionIcon>
// 	} else if(icon || label) {
// 		control = <Button>{ icon && icon }{ label && label }</Button>

// 		return <Menu control={ control } { ...props }>{ children }</Menu>
// 	}

// 	return <Menu { ...props }>{ children }</Menu>
// }

// MenuComponent.Item = MenuItem

// export default MenuComponent

import React from 'react'
import { Menu, type MenuProps } from '@mantine/core'
import MenuItem from './MenuItem'
import MenuTarget from './MenuTarget'

const MenuComponent = ({ children, ...props }: MenuProps) => {
	return (
		<Menu { ...props }>{ children }</Menu>
	)
}

MenuComponent.Target = MenuTarget
MenuComponent.Dropdown = Menu.Dropdown
MenuComponent.Label = Menu.Label
MenuComponent.Item = MenuItem
MenuComponent.Divider = Menu.Divider

export default MenuComponent
