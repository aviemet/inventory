import React from 'react'
import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { Sun, MoonStars } from 'tabler-icons-react'

const ToggleColorSchemeButton = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()

	return (
		<ActionIcon
			color={ colorScheme === 'dark' ? 'yellow' : 'blue' }
			onClick={ () => toggleColorScheme() }
			title="Toggle color scheme"
			style={ { display: 'inline-flex' } }
			aria-label={ `Enable ${colorScheme === 'dark' ? 'light' : 'dark'} mode` }
		>
			{ colorScheme === 'dark' ? <Sun size={ 18 } /> : <MoonStars size={ 18 } /> }
		</ActionIcon>
	)
}

export default ToggleColorSchemeButton
