import React from 'react'
import { router } from '@inertiajs/react'
import { Select } from '@mantine/core'
import axios from 'axios'
import { Routes } from '@/lib'
import { useLocation, usePageProps } from '@/lib/hooks'

interface ILimitSelectProps {
	pagination: Schema.Pagination
	model: string
}

const LimitSelect = ({ pagination, model }: ILimitSelectProps) => {
	const { auth: { user } } = usePageProps()
	const location = useLocation()

	const handleLimitChange = (limit: string) => {
		if(!model) return

		axios.patch( Routes.apiUpdateTablePreferences(user.id!), {
			user: {
				table_preferences: {
					[model]: { limit },
				},
			},
		}).then(() => {
			// Redirect to first page if new limit puts page out of bounds of records
			if(parseInt(limit) * (pagination.current_page - 1) > pagination.count) {
				location.params.delete('page')
				router.get(
					location.path,
					{ ...location.paramsAsJson },
					{ preserveScroll: true },
				)
			} else {
				router.reload()
			}
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
