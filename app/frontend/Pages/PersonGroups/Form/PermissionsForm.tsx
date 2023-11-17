import React, { useCallback, useState } from 'react'
import { Form, TextInput, Submit, FormGroup, Switch, Textarea } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { Table } from '@/Components'
import { Routes, exclude } from '@/lib'
import { createContext, usePageProps } from '@/lib/hooks'
import SwitchRow from './SwitchRow'
import tableRows from './tableRows'
import ColumnToggle from './ColumnToggle'
import { emptyGroup } from './formData'
import { FormData } from '.'

const [usePermissionsForm, PermissionsFormContext] = createContext<{
	isCompanyAdmin: boolean
	columns: number
}>()
export { usePermissionsForm }

export interface IGroupFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<FormData>) => boolean|void
	person_group?: Schema.PersonGroupsFormData
}

const GroupForm = ({ to, method = 'post', onSubmit, person_group = emptyGroup }: IGroupFormProps) => {
	const { auth: { user } } = usePageProps()

	const formData = { person_group: (person_group ? exclude(person_group, ['id', 'slug']) : emptyGroup) } as FormData
	const [isCompanyAdmin, setIsCompanyAdmin] = useState<boolean>(formData.person_group.permissions?.company?.admin || false)

	const longestPermissionsArray = useCallback(() => {
		return tableRows.reduce((length, row) => {
			return Math.max(row.permissions.length, length)
		}, 0)
	}, [tableRows])

	const handleSubmit = (form: UseFormProps<FormData>) => {
		if(form.getData('person_group.permissions.company.admin')) {
			form.transform(data => {
				const clonedData = structuredClone(data)
				const keys = Object.keys(clonedData.person_group.permissions)

				keys.forEach((key) => {
					if(key !== 'company') {
						clonedData.person_group.permissions[key] = {}
					}
				})

				return clonedData
			})
		}
		onSubmit?.(form)
	}

	return (
		<PermissionsFormContext value={ { isCompanyAdmin, columns: longestPermissionsArray() } }>
			<Form
				model="person_group"
				data={ formData }
				to={ to }
				method={ method }
				onSubmit={ handleSubmit }
				railsAttributes={ false }
				remember={ false }
			>
				<TextInput name="name" label="Name" required autoFocus />

				<Textarea name="description" label="Description" />

				<FormGroup legend="Permissions" model="permissions">
					<Switch
						name="company.admin"
						label={ `Set as administrator group for ${user.active_company?.name}` }
						onChange={ (checked) => setIsCompanyAdmin(checked) }
					/>

					<Table mt={ 32 }>
						<Table.Head>
							<Table.Row>
								<Table.Cell>All</Table.Cell>
								<Table.Cell>Record Type</Table.Cell>
								<Table.Cell>
									<ColumnToggle permission="index" /> List
								</Table.Cell>
								<Table.Cell>
									<ColumnToggle permission="show" /> View
								</Table.Cell>
								<Table.Cell>
									<ColumnToggle permission="create" /> Create
								</Table.Cell>
								<Table.Cell>
									<ColumnToggle permission="update" /> Edit
								</Table.Cell>
								<Table.Cell>
									<ColumnToggle permission="delete" /> Delete
								</Table.Cell>
								<Table.Cell>
									<ColumnToggle permission="checkout" /> Checkout
								</Table.Cell>
								<Table.Cell>
									<ColumnToggle permission="checkin" /> Checkin
								</Table.Cell>
							</Table.Row>
						</Table.Head>
						<Table.Body>{ tableRows.map(row => (
							<SwitchRow key={ row.model } { ...row } />
						)) }</Table.Body>
					</Table>
				</FormGroup>

				<Submit cancelRoute={ Routes.personGroups() }>
					{ person_group?.id ? 'Update' : 'Create' } Group
				</Submit>
			</Form>
		</PermissionsFormContext>
	)
}

export default React.memo(GroupForm)
