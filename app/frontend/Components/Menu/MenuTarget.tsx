import React from 'react'
import { ActionIcon, Menu, type MenuTargetProps } from '@mantine/core'
import { DotsIcon } from '@/Components/Icons'

interface IMenuTargetProps extends Omit<MenuTargetProps, 'children'> {
	children?: React.ReactNode
}

const MenuTarget = ({ children, ...props }: IMenuTargetProps) => {
	if(!children) {
		return (
			<Menu.Target { ...props }>
				<ActionIcon><DotsIcon /></ActionIcon>
			</Menu.Target>
		)
	}

	return (
		<Menu.Target { ...props }>
			{ children }
		</Menu.Target>
	)
}

export default MenuTarget
