import React, { useCallback, useState } from 'react'
import { Form, TextInput, Submit, FormGroup, Switch, Textarea } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { Table } from '@/Components'
import { usePage } from '@inertiajs/react'
import { createContext } from '@/Components/Hooks'
import SwitchRow from './SwitchRow'
import tableRows from './tableRows'
import ColumnToggle from './ColumnToggle'
import { emptyGroup } from './formData'
import { exclude } from '@/lib'

type FormData = Omit<Schema.UserGroupPermissions, 'id'|'slug'|'created_at'|'updated_at'>

const [usePermissionsForm, PermissionsFormContext] = createContext<{
	isCompanyAdmin: boolean
	columns: number
}>()
export { usePermissionsForm }

export interface IGroupFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<{ user_group: Schema.UserGroupPermissions}>) => boolean|void
	user_group?: Schema.UserGroupPermissions
}

const GroupForm = ({ to, method = 'post', onSubmit, user_group }: IGroupFormProps) => {
	const page = usePage<SharedInertiaProps>()

	const formData = (user_group ? exclude(user_group, 'id') : emptyGroup) as FormData
	const [isCompanyAdmin, setIsCompanyAdmin] = useState<boolean>(formData!.permissions?.company_admin || false)

	const longestPermissionsArray = useCallback(() => {
		return tableRows.reduce((length, row) => {
			return Math.max(row.permissions.length, length)
		}, 0)
	}, [tableRows])

	return (
		<PermissionsFormContext value={ { isCompanyAdmin, columns: longestPermissionsArray() } }>
			<Form
				model="user_group"
				data={ { user_group: formData } }
				to={ to }
				method={ method }
				onSubmit={ onSubmit }
				railsAttributes={ false }
				remember={ false }
			>
				<TextInput name="name" label="Name" required autoFocus />

				<Textarea name="description" label="Description" />

				<FormGroup legend="Permissions" model="permissions">
					<Switch
						name="admin"
						label={ `Set as administrator group for ${page.props.auth?.user?.active_company?.name}` }
						onChange={ e => setIsCompanyAdmin(e.target.checked) }
					/>

					<Table mt={ 32 }>
						<Table.Head>
							<Table.Row>
								<Table.Cell>All</Table.Cell>
								<Table.Cell>Record Type</Table.Cell>
								<Table.Cell>
									List <ColumnToggle permission="index" />
								</Table.Cell>
								<Table.Cell>
									View <ColumnToggle permission="show" />
								</Table.Cell>
								<Table.Cell>
									Create <ColumnToggle permission="create" />
								</Table.Cell>
								<Table.Cell>
									Edit <ColumnToggle permission="update" />
								</Table.Cell>
								<Table.Cell>
									Delete <ColumnToggle permission="delete" />
								</Table.Cell>
								<Table.Cell>
									Checkout <ColumnToggle permission="checkout" />
								</Table.Cell>
								<Table.Cell>
									Checkin <ColumnToggle permission="checkin" />
								</Table.Cell>
							</Table.Row>
						</Table.Head>
						<Table.Body>{ tableRows.map(row => (
							<SwitchRow key={ row.model } { ...row } />
						)) }</Table.Body>
					</Table>
				</FormGroup>

				<Submit>
					{ user_group?.id ? 'Update' : 'Create' } Group
				</Submit>
			</Form>
		</PermissionsFormContext>
	)
}

export default React.memo(GroupForm)
