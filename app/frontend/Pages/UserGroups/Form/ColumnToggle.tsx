import { Checkbox } from '@/Components/Inputs'
import React, { useCallback, useRef } from 'react'
import { useForm } from 'use-inertia-form'
import { usePermissionsForm } from '.'
import tableRows from './tableRows'

interface IColumnToggleProps {
	permission: string
}

const ColumnToggle = ({ permission }: IColumnToggleProps) => {
	const { isCompanyAdmin } = usePermissionsForm()
	const { data, setData, getData } = useForm()
	const checkboxRef = useRef<HTMLInputElement>(null)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		tableRows.forEach(row => {
			if(row.permissions.includes(permission)) {
				setData(`user_group.permissions.${row.model}.${permission}`, e.target.checked)
			}
		})
	}

	const calculateCheckedState = useCallback(() => {
		let rowCount = 0
		let trueCount = 0

		tableRows.forEach(row => {
			if(row.permissions.includes((permission))) {
				rowCount++
				if(getData(`user_group.permissions.${row.model}.${permission}`)) {
					trueCount++
				}
			}
		})

		console.log({ permission, rowCount, trueCount })

		let checked = undefined
		if(isCompanyAdmin === true || (rowCount !== 0 && rowCount === trueCount)) {
			checked = true
		} else if(trueCount === 0) {
			checked = false
		}

		return {
			checked,
			indeterminate: rowCount !== trueCount,
		}
	}, [data.user_group.permissions])

	const { checked, indeterminate } = calculateCheckedState()

	return (
		<Checkbox
			ref={ checkboxRef }
			onChange={ handleChange  }
			disabled={ isCompanyAdmin }
			checked={ checked }
			indeterminate={ indeterminate }
		/>
	)
}

export default ColumnToggle
