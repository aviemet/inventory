import React from 'react'
import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { Sun, MoonStars } from 'tabler-icons-react'

const ToggleColorSchemeButton = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()

	const iconProps = { size: 18 }

	return (
		<ActionIcon
			color={ colorScheme === 'dark' ? 'light' : 'dark' }
			onClick={ () => toggleColorScheme() }
			title="Toggle color scheme"
			style={ { display: 'inline-flex' } }
			aria-label={ `Enable ${colorScheme === 'dark' ? 'light' : 'dark'} mode` }
			size="sm"
		>
			{ colorScheme === 'dark' ? <Sun { ...iconProps } /> : <MoonStars { ...iconProps } /> }
		</ActionIcon>
	)
}

export default ToggleColorSchemeButton
