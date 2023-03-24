import React from 'react'
import { Menu } from '@/Components'
import { Avatar, Box, UnstyledButton } from '@mantine/core'
import { ToggleColorSchemeButton } from '@/Components/Button'

const AvatarMenu = () => {
	return (
		<Menu>
			<Menu.Target>
				<UnstyledButton aria-label="User Menu">
					<Avatar
						radius="xl"
						color="primary"
						variant="filled"
					/>
				</UnstyledButton>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Item>
					<Box sx={ { whiteSpace: 'nowrap' } }>Toggle Color Scheme <ToggleColorSchemeButton /></Box>
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}

export default AvatarMenu
