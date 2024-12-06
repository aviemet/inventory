import React, { useCallback, useState } from 'react'
import { Grid, Table } from '@/Components'
import { Form, TextInput, Submit, FormGroup, Switch, Textarea } from '@/Components/Form'
import { Routes } from '@/lib'
import { createContext, usePageProps } from '@/lib/hooks'
import SwitchRow from './SwitchRow'
import tableRows from './tableRows'
import ColumnToggle from './ColumnToggle'
import { emptyGroup } from './formData'
import { FormData } from '.'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

const [usePermissionsForm, PermissionsFormContext] = createContext<{
	isCompanyAdmin: boolean
	columns: number
}>()
export { usePermissionsForm }

export interface GroupFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<FormData>) => boolean | void
	person_group?: Schema.PersonGroupsFormData
}

const GroupForm = ({ to, method = 'post', onSubmit, person_group = emptyGroup }: GroupFormProps) => {
	const { auth: { user } } = usePageProps()

	const formData = { person_group: person_group ? person_group : emptyGroup } as FormData
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
				filter={ ['id', 'slug'] }
			>
				<Grid>
					<Grid.Col>
						<TextInput name="name" label="Name" required />
					</Grid.Col>

					<Grid.Col>
						<Textarea name="description" label="Description" />
					</Grid.Col>

					<FormGroup legend="Permissions" model="permissions">
						<Grid.Col>
							<Switch
								name="company.admin"
								label={ `Set as administrator group for ${user.active_company?.name}` }
								onChange={ (checked) => setIsCompanyAdmin(checked) }
							/>
						</Grid.Col>

						<Grid.Col>
							<Table mt={ 32 }>
								<Table.Head>
									<Table.Row>
										<Table.HeadCell>
											All
										</Table.HeadCell>
										<Table.HeadCell>
											Record Type
										</Table.HeadCell>
										<Table.HeadCell>
											<ColumnToggle permission="index" /> List
										</Table.HeadCell>
										<Table.HeadCell>
											<ColumnToggle permission="show" /> View
										</Table.HeadCell>
										<Table.HeadCell>
											<ColumnToggle permission="create" /> Create
										</Table.HeadCell>
										<Table.HeadCell>
											<ColumnToggle permission="update" /> Edit
										</Table.HeadCell>
										<Table.HeadCell>
											<ColumnToggle permission="delete" /> Delete
										</Table.HeadCell>
										<Table.HeadCell>
											<ColumnToggle permission="checkout" /> Checkout
										</Table.HeadCell>
										<Table.HeadCell>
											<ColumnToggle permission="checkin" /> Checkin
										</Table.HeadCell>
									</Table.Row>
								</Table.Head>
								<Table.Body>{ tableRows.map(row => (
									<SwitchRow key={ row.model } { ...row } />
								)) }</Table.Body>
							</Table>
						</Grid.Col>
					</FormGroup>

					<Grid.Col>
						<Submit cancelRoute={ Routes.personGroups() }>
							{ person_group?.id ? 'Update' : 'Create' } Group
						</Submit>
					</Grid.Col>

				</Grid>
			</Form>
		</PermissionsFormContext>
	)
}

export default GroupForm
