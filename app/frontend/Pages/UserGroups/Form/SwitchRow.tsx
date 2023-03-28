import React, { useCallback } from 'react'
import { NestedFields, useForm } from 'use-inertia-form'
import { Table } from '@/Components'
import { Checkbox } from '@/Components/Inputs'
import { Switch } from '@/Components/Form'
import { useCheckboxState } from '@/Components/Hooks'
import { usePermissionsForm } from '.'

interface ISwitchRowProps {
	label: string
	model: string
	permissions: string[]
}

const SwitchRow = ({ label, model, permissions }: ISwitchRowProps) => {
	const { isCompanyAdmin, columns } = usePermissionsForm()
	const { data, setData, getData } = useForm()

	const columnProperties = useCallback(() => {
		return permissions.reduce(({ length, selected }, permission) => {
			length++
			if(getData(`user_group.permissions.${model}.${permission}`)) {
				selected++
			}
			return { length, selected }
		}, { length: 0, selected: 0 })
	}, [data?.user_group?.permissions[model]])

	const { length, selected } = columnProperties()
	const { allChecked, indeterminate } = useCheckboxState(length, selected)

	const setRow = useCallback((model: string, checked: boolean) => {
		permissions.forEach(permission => {
			setData(`${model}.${permission}`, checked)
		})
	}, [data?.user_group?.permissions[model]])

	let checked = {}
	if(isCompanyAdmin) {
		checked = { checked: true }
	}

	return (
		<NestedFields model={ model }>
			<Table.Row>
				<Table.Cell>
					<Checkbox
						onChange={ e => setRow(`user_group.permissions.${model}`, e.target.checked) }
						checked={ allChecked }
						indeterminate={ indeterminate }
						disabled={ isCompanyAdmin }
					/>
				</Table.Cell>
				<Table.Cell>{ label }</Table.Cell>
				<>{ permissions.map(permission => (
					<Table.Cell key={ `${model}_${permission}` }>
						<Switch
							name={ permission }
							field={ false }
							disabled={ isCompanyAdmin }
							{ ...checked }
						/>
					</Table.Cell>
				) ) }</>
				<>{ permissions.length < columns && Array(columns - permissions.length).fill(null).map((_,i) => (
					<Table.Cell key={ `${model}_${i}` }></Table.Cell>
				)) }</>
			</Table.Row>
		</NestedFields>
	)
}

export default SwitchRow


