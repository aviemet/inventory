import React from 'react'
import { Footer, Group, useMantineTheme } from '@mantine/core'
import { ToggleColorSchemeButton } from '@/Components/Button'

const FooterComponent = () => {
	const theme = useMantineTheme()

	return (
		<Footer height={ theme.other.footer.height } py={ 4 } px={ 8 }>
			<Group position="apart">
				<ToggleColorSchemeButton />
				<div>©{ (new Date).getFullYear() }</div>
			</Group>
		</Footer>
	)
}

export default FooterComponent

