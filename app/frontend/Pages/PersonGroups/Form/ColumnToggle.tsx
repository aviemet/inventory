import React, { useCallback, useRef } from 'react'
import { Checkbox } from '@/Components/Inputs'
import { useForm } from 'use-inertia-form'
import { type FormData, type Permissions } from '.'
import tableRows from './tableRows'
import { useCheckboxState } from '@/lib/hooks'
import { usePermissionsForm } from './PermissionsForm'

interface ColumnToggleProps {
	permission: keyof Permissions
}

const ColumnToggle = ({ permission }: ColumnToggleProps) => {
	const { isCompanyAdmin } = usePermissionsForm()
	const { data, setData, getData } = useForm<FormData>()
	// const checkboxRef = useRef<HTMLInputElement>(null)

	const columnProperties = useCallback(() => {
		return tableRows.reduce(({ length, selected }, row) => {
			if(row.permissions.includes(permission)) {
				length++
				if(getData(`person_group.permissions.${row.model}.${permission}`)) {
					selected++
				}
			}
			return { length, selected }
		}, { length: 0, selected: 0 })
	}, [data?.person_group?.permissions])

	const { length, selected } = columnProperties()
	const { allChecked, indeterminate } = useCheckboxState(length, selected)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		tableRows.forEach(row => {
			if(row.permissions.includes(permission)) {
				setData(`person_group.permissions.${row.model}.${permission}`, e.target.checked)
			}
		})
	}

	return (
		<Checkbox
			// ref={ checkboxRef }
			onChange={ handleChange  }
			disabled={ isCompanyAdmin }
			checked={ allChecked }
			indeterminate={ indeterminate }
			mr={ 6 }
		/>
	)
}

export default ColumnToggle
