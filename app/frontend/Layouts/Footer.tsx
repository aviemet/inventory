import React from 'react'
import { Box, AppShell, Group, useMantineTheme } from '@mantine/core'
import { ToggleColorSchemeButton } from '@/Components/Button'

const FooterComponent = () => {
	const theme = useMantineTheme()

	return (
		<AppShell.Footer height={ theme.other.footer.height } py={ 4 } px={ 8 }>
			<Group>
				<Box style={ { width: 32 } }>
					<ToggleColorSchemeButton />
				</Box>
				<div id="footer-portal" />
				<Box style={ { marginLeft: 'auto' } }>©{ (new Date).getFullYear() }</Box>
			</Group>
		</AppShell.Footer>
	)
}

export default FooterComponent
