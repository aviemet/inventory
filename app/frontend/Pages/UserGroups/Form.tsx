import React, { useState } from 'react'
import {
	Form,
	TextInput,
	Submit,
	FormGroup,
	Switch,
	RadioButtons,
} from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { Table } from '@/Components'
import { usePage } from '@inertiajs/react'

export interface IGroupFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps) => boolean|void
	user_group?: Partial<Schema.UserGroup>
}

const emptyGroup: Partial<Schema.UserGroup> = {
	name: '',
}

const GroupForm = ({ to, method = 'post', onSubmit, user_group = emptyGroup }: IGroupFormProps) => {
	const page = usePage()

	const [isSuperUser, setIsSuperUser] = useState<boolean>(user_group?.permissions?.super_user || false)

	return (
		<Form
			model="user_group"
			data={ { user_group } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<FormGroup legend="Permissions">
				<Switch
					name="permissions.super_user"
					label={ `Super User for ${page.props.auth?.user?.active_company?.name}` }
					onChange={ e => setIsSuperUser(e.target.checked) }
				/>

				<Table mt={ 32 }>
					<Table.Head>
						<Table.Row>
							<Table.Cell>Record Type</Table.Cell>
							<Table.Cell>View</Table.Cell>
							<Table.Cell>Create</Table.Cell>
							<Table.Cell>Edit</Table.Cell>
							<Table.Cell>Delete</Table.Cell>
							<Table.Cell>Checkin</Table.Cell>
							<Table.Cell>Checkout</Table.Cell>
						</Table.Row>
					</Table.Head>
					<Table.Body>

						<Table.Row>
							<Table.Cell>Hardware</Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Accessories</Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Components</Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Consumables</Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Licenses</Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Networks</Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Vendors</Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Contracts</Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Categories</Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Models</Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Manufacturers</Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Departments</Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Locations</Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
							<Table.Cell><Switch name="" field={ false } disabled={ isSuperUser } /></Table.Cell>
						</Table.Row>

					</Table.Body>
				</Table>
			</FormGroup>

			<Submit>
				{ user_group.id ? 'Update' : 'Create' } Group
			</Submit>
		</Form>
	)
}

export default React.memo(GroupForm)
