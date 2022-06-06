import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import { ColumnsIcon } from '@/Components/Icons'
import { Popover, Option } from '@/Components/Popover'
import { Checkbox } from '@/Components/Inputs'
import { Routes } from '@/lib'
import { useTableContext } from '../TableContext'
import tsIgnoreUserData from './tsIgnoreUserData'
import 'twin.macro'

interface IColumnPickerProps {
	model: string
}


const ColumnPicker = ({ model }: IColumnPickerProps) => {
	const { props: { auth: { user } } } = usePage<InertiaPage>()
	const { tableState: { columns } } = useTableContext()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// @ts-ignore
		Inertia.patch(Routes.updateTablePreferences(user.id), tsIgnoreUserData(model, user.table_preferences?.hide, e.target.name))
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
						/>
					</Option>)) }
			</Popover>
		</div>
	)
}

export default ColumnPicker
