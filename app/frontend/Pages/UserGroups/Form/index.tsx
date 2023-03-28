import React, { useCallback, useState } from 'react'
import {
	Form,
	TextInput,
	Submit,
	FormGroup,
	Switch,
	Textarea,
	FormConsumer,
} from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { Group, Table } from '@/Components'
import { usePage } from '@inertiajs/react'
import { createContext } from '@/Components/Hooks'
import SwitchRow from './SwitchRow'
import { Checkbox } from '@/Components/Inputs'
import tableRows from './tableRows'
import ColumnToggle from './ColumnToggle'

type TFormData = {
	user_group: Schema.UserGroup
}

export interface IGroupFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TFormData>) => boolean|void
	user_group?: Partial<Schema.UserGroup>
}

const emptyGroup: Partial<Schema.UserGroup> = {
	name: '',
	description: '',
	permissions: {
		items:         { index: true, show: true, create: false, update: false, delete: false, checkout: true, checkin: true },
		accessories:   { index: true, show: true, create: false, update: false, delete: false, checkout: true, checkin: true },
		components:    { index: true, show: true, create: false, update: false, delete: false, checkout: true, checkin: true },
		consumables:   { index: true, show: true, create: false, update: false, delete: false, checkout: true },
		licenses:      { index: true, show: true, create: false, update: false, delete: false, checkout: true, checkin: true },
		networks:      { index: true, show: true, create: false, update: false, delete: false },
		vendors:       { index: true, show: true, create: false, update: false, delete: false },
		contracts:     { index: true, show: true, create: false, update: false, delete: false },
		categories:    { index: true, show: true, create: false, update: false, delete: false },
		models:        { index: true, show: true, create: false, update: false, delete: false },
		manufacturers: { index: true, show: true, create: false, update: false, delete: false },
		departments:   { index: true, show: true, create: false, update: false, delete: false },
		locations:     { index: true, show: true, create: false, update: false, delete: false },
	},
}

const [usePermissionsForm, PermissionsFormContext] = createContext<{
	isCompanyAdmin: boolean
	columns: number
}>()
export { usePermissionsForm }

const GroupForm = ({ to, method = 'post', onSubmit, user_group = emptyGroup }: IGroupFormProps) => {
	const page = usePage()

	const [isCompanyAdmin, setIsCompanyAdmin] = useState<boolean>(user_group?.permissions?.admin || false)

	const longestPermissionsArray = useCallback(() => {
		return tableRows.reduce((length, row) => {
			return Math.max(row.permissions.length, length)
		}, 0)
	}, [tableRows])

	return (
		<PermissionsFormContext value={ { isCompanyAdmin, columns: longestPermissionsArray() } }>
			<Form
				model="user_group"
				data={ { user_group } }
				to={ to }
				method={ method }
				onSubmit={ onSubmit }
				railsAttributes={ false }
				onChange={ ({ data }) => console.log({ data }) }
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
								<Table.Cell nowrap>
									List <ColumnToggle permission="index" />
								</Table.Cell>
								<Table.Cell>
									View <ColumnToggle permission="show" />
								</Table.Cell>
								<Table.Cell>
									Create <ColumnToggle permission="create" />
								</Table.Cell>
								<Table.Cell>
									Edit <ColumnToggle permission="edit" />
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
					{ user_group.id ? 'Update' : 'Create' } Group
				</Submit>
			</Form>
		</PermissionsFormContext>
	)
}

export default React.memo(GroupForm)
