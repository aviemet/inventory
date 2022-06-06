import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import axios from 'axios'
import { usePage } from '@inertiajs/inertia-react'
import { ColumnsIcon } from '@/Components/Icons'
import { Popover, Option } from '@/Components/Popover'
import { Checkbox } from '@/Components/Inputs'
import { Routes } from '@/lib'
import { useTableContext } from '../TableContext'
import 'twin.macro'

interface IColumnPickerProps {
	model: string
}

const ColumnPicker = ({ model }: IColumnPickerProps) => {
	const { props: { auth: { user } } } = usePage<InertiaPage>()
	const { tableState: { columns } } = useTableContext()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		axios.patch( Routes.updateTablePreferences(user.id), {
			user: {
				table_preferences: {
					[model]: {
						hide: {
							[e.target.name]: e.target.checked
						}
					}
				}
			}
		}).then(response => {
			Inertia.reload({ only: ['auth'] })
		})
	}

	return (
		<div tw="absolute top-0 right-0 w-10 h-full bg-brand-light">
			<Popover icon={ ColumnsIcon } tw="p-1 h-full">
				{ [...columns].map(([name, label]) => (
					<Option key={ name } bubble={ false }>
						<Checkbox
							name={ name }
							label={ label }
							labelPosition="end"
							onChange={ handleChange }
							checked={ user.table_preferences?.[model]?.hide?.[name] || false }
						/>
					</Option>)) }
			</Popover>
		</div>
	)
}

export default ColumnPicker
