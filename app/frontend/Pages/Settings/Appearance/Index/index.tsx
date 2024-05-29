import React, { useCallback, useEffect, useRef } from 'react'
import { Box, Heading, Grid } from '@/Components'
import { Form, Submit, SwatchInput } from '@/Components/Form'
import SettingsLayout from '@/Pages/Settings/SettingsLayout'
import { Routes } from '@/lib'
import { defaults } from 'lodash'
import { useLayoutStore } from '@/lib/store'
import { type UseFormProps } from 'use-inertia-form'

interface AppearanceFormData {
	settings: {
		primary_color: string
	}
}

interface AppearanceSettingsProps {
	settings: {
		primary_color?: string
	}
}

const AppearanceSettings = ({ settings }: AppearanceSettingsProps) => {
	const { primaryColor, setPrimaryColor } = useLayoutStore()
	const RevertColorRef = useRef<string>(primaryColor!)

	const handleChange = (color: string) => {
		setPrimaryColor(color)
	}

	useEffect(() => {
		return () => {
			setPrimaryColor(RevertColorRef.current)
		}
	}, [])

	const defaultFormData = useCallback(() => {
		const merged = defaults({
			settings: {
				primary_color: primaryColor!,
			},
		}, { settings })
		return merged
	}, [])

	const handleSubmit = ({ getData }: UseFormProps<AppearanceFormData>) => {
		RevertColorRef.current = getData('settings.primary_color')
	}

	return (
		<SettingsLayout>
			<Heading mb={ 24 }>Appearance Settings</Heading>
			<Box>
				<Heading order={ 2 }>Company Theme</Heading>
				<Form
					model="settings"
					data={ defaultFormData() }
					method="put"
					to={ Routes.settingsAppearance() }
					onSubmit={ handleSubmit }
					remember={ false }
				>
					<Grid>
						<Grid.Col>
							<SwatchInput label="Company Color" name="primary_color" onChange={ handleChange } />
						</Grid.Col>

						<Grid.Col>
							<Submit>Save Appearance Settings</Submit>
						</Grid.Col>

					</Grid>

				</Form>
			</Box>
		</SettingsLayout>
	)
}

export default AppearanceSettings
