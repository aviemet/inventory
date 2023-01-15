import React from 'react'
import { Menu } from '@/Components'
import { Avatar } from '@mantine/core'
import { ToggleColorSchemeButton } from '@/Components/Button'

const AvatarMenu = () => {
	return (
		<Menu>
			<Menu.Target>
				<Avatar
					radius="xl"
					color="primary"
					variant="filled"
				/>
			</Menu.Target>

			<Menu.Dropdown>
				<ToggleColorSchemeButton />
			</Menu.Dropdown>
		</Menu>
	)
}

export default AvatarMenu
