import React, { useEffect, useRef } from 'react'
import { Box, Heading } from '@/Components'
import { Form, Submit, SwatchInput } from '@/Components/Form'
import { useMantineTheme } from '@mantine/core'
import SettingsLayout from '@/Pages/Settings/SettingsLayout'
import { useLayout } from '@/Layouts/Providers'
import { Routes } from '@/lib'
import { defaults } from 'lodash'
import { usePage } from '@inertiajs/react'

interface IAppearanceSettingsProps {
	settings: {
		primary_color?: string
	}
}

const AppearanceSettings = ({ settings }: IAppearanceSettingsProps) => {
	const theme = useMantineTheme()
	const { setLayoutState } = useLayout()
	const page = usePage<SharedInertiaProps>()

	const handleChange = (color: string) => {
		setLayoutState({
			primaryColor: color,
		})
	}

	useEffect(() => {
		return () => {
			setLayoutState({
				primaryColor: page.props.auth?.user?.active_company?.settings?.primary_color,
			})
		}
	}, [])

	const defaultFormData = {
		settings: {
			primary_color: theme.primaryColor,
		},
	}

	return (
		<SettingsLayout>
			<Heading mb={ 24 }>Appearance Settings</Heading>
			<Box>
				<Heading order={ 2 }>Company Theme</Heading>
				<Form
					model="settings"
					data={ { ...defaults(defaultFormData, settings) } }
					method="put"
					to={ Routes.settingsAppearance() }
				>
					<SwatchInput label="Company Color" name="primary_color" onChange={ handleChange } />
					<Submit>Save Appearance Settings</Submit>
				</Form>
			</Box>
		</SettingsLayout>
	)
}

export default AppearanceSettings
