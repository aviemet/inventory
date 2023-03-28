import React, { useCallback } from 'react'
import { Table } from '@/Components'
import { Checkbox } from '@/Components/Inputs'
import { NestedFields, useForm } from 'use-inertia-form'
import { usePermissionsForm } from '.'
import { Switch } from '@/Components/Form'

interface ISwitchRowProps {
	label: string
	model: string
	permissions: string[]
}

const SwitchRow = ({ label, model, permissions }: ISwitchRowProps) => {
	const { isCompanyAdmin, columns } = usePermissionsForm()
	const { data, setData, getData, onBeforeChange } = useForm()

	const setRow = useCallback((model: string, checked: boolean) => {
		permissions.forEach(permission => {
			setData(`${model}.${permission}`, checked)
		})
	}, [data.user_group.permissions['model']])

	// TODO: Set intermediate flag on checkbox
	// onBeforeChange((key, value, prev) => {
	// 	if(!key) return
	// })

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


