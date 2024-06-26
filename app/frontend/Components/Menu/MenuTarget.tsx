import React from 'react'
import { ActionIcon, Menu, type MenuTargetProps as MantineMenuTargetProps } from '@mantine/core'
import { DotsIcon } from '@/Components/Icons'

interface MenuTargetProps extends Omit<MantineMenuTargetProps, 'children'> {
	children?: React.ReactNode
	icon?: React.ReactNode
	variant?: 'gradient' | 'subtle' | 'filled' | 'outline' | 'light' | 'default' | 'transparent'
	color?: string
}

const MenuTarget = ({ children, icon, variant, color, ...props }: MenuTargetProps) => {
	if(!children) {
		return (
			<Menu.Target { ...props }>
				<ActionIcon color={ color } variant={ variant } >
					{ icon || <DotsIcon /> }
				</ActionIcon>
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
