import React from 'react'
import { Box, Heading } from '@/Components'
import { Form, SwatchInput } from '@/Components/Form'
import { ColorInput, DEFAULT_THEME, useMantineTheme } from '@mantine/core'
import SettingsLayout from '@/Pages/Settings/SettingsLayout'
import { useLayout } from '@/Layouts/Providers'

// console.log({ colors: DEFAULT_THEME.colors })
const Appearance = () => {
	const theme = useMantineTheme()
	const { layoutState, setLayoutState } = useLayout()
	console.log({ layoutState })
	const handleChange = (color: string) => {
		console.log({ color })
		setLayoutState({
			primaryColor: color,
		})
	}

	return (
		<SettingsLayout>
			<Heading mb={ 24 }>Appearance Settings</Heading>
			<Box>
				<Heading order={ 2 }>Company Theme</Heading>
				<ColorInput
					label="Company Color"
					disallowInput
					withPicker={ false }
					swatches={ Object.keys(DEFAULT_THEME.colors).map(color => {
						return DEFAULT_THEME.colors[color][6]
					}) }
				/>
				<Form
					model="settings"
					data={ { settings: { color: theme.primaryColor } } }
					method="patch"
				>
					<SwatchInput label="Company Color" name="color" onChange={ handleChange } />
				</Form>
			</Box>
		</SettingsLayout>
	)
}

export default Appearance
