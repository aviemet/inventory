import React from 'react'
import { router, usePage } from '@inertiajs/react'
import { Select } from '@mantine/core'
import axios from 'axios'
import { Routes } from '@/lib'

interface ILimitSelectProps {
	pagination: Schema.Pagination
	model: string
}

const LimitSelect = ({ pagination, model }: ILimitSelectProps) => {
	const { auth: { user } } = usePage<SharedInertiaProps>().props

	const handleLimitChange = (limit: string) => {
		if(!model) return

		axios.patch( Routes.updateTablePreferences(user.id!), {
			user: {
				table_preferences: {
					[model]: { limit },
				},
			},
		}).then(() => {
			router.reload()
		})
	}

	return (
		<Select
			variant="filled"
			radius="md"
			mx={ 4 }
			my={ 0 }
			sx={ {
				display: 'inline-block',
				maxWidth: 60,
				'.mantine-Select-rightSection': {
					width: '1.25rem',
				},
				'.mantine-Select-input': {
					paddingRight: '1.25rem',
				} } }
			rightSectionWidth='1rem'
			defaultValue={ String(pagination.limit) || '25' }
			data={ [
				{ value: '10', label: '10' },
				{ value: '25', label: '25' },
				{ value: '50', label: '50' },
				{ value: '100', label: '100' },
			] }
			onChange={ handleLimitChange }
		/>
	)
}

export default LimitSelect
