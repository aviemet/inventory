import React, { useCallback, useRef } from 'react'
import { Checkbox } from '@/Components/Inputs'
import { useForm } from 'use-inertia-form'
import { usePermissionsForm } from '.'
import tableRows from './tableRows'
import { useCheckboxState } from '@/Components/Hooks'

interface IColumnToggleProps {
	permission: string
}

const ColumnToggle = ({ permission }: IColumnToggleProps) => {
	const { isCompanyAdmin } = usePermissionsForm()
	const { data, setData, getData } = useForm()
	const checkboxRef = useRef<HTMLInputElement>(null)

	const columnProperties = useCallback(() => {
		return tableRows.reduce(({ length, selected }, row) => {
			if(row.permissions.includes(permission)) {
				length++
				if(getData(`user_group.permissions.${row.model}.${permission}`)) {
					selected++
				}
			}
			return { length, selected }
		}, { length: 0, selected: 0 })
	}, [data?.user_group?.permissions])

	const { length, selected } = columnProperties()
	const { allChecked, indeterminate } = useCheckboxState(length, selected)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		tableRows.forEach(row => {
			if(row.permissions.includes(permission)) {
				setData(`user_group.permissions.${row.model}.${permission}`, e.target.checked)
			}
		})
	}

	return (
		<Checkbox
			ref={ checkboxRef }
			onChange={ handleChange  }
			disabled={ isCompanyAdmin }
			checked={ allChecked }
			indeterminate={ indeterminate }
		/>
	)
}

export default ColumnToggle
