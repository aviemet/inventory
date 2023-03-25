import React, { useState } from 'react'
import {
	Form,
	TextInput,
	Submit,
	FormGroup,
	Switch,
	FormConsumer,
} from '@/Components/Form'
import { NestedFields, type UseFormProps } from 'use-inertia-form'
import { Table } from '@/Components'
import { usePage } from '@inertiajs/react'
import { Checkbox } from '@/Components/Inputs'

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
			onChange={ form => console.log({ data: form.data }) }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<FormGroup legend="Permissions" model="permissions">
				<Switch
					name="super_user"
					label={ `Super User for ${page.props.auth?.user?.active_company?.name}` }
					onChange={ e => setIsSuperUser(e.target.checked) }
				/>

				<Table mt={ 32 }>
					<Table.Head>
						<Table.Row>
							<Table.Cell>All</Table.Cell>
							<Table.Cell>Record Type</Table.Cell>
							<Table.Cell>View</Table.Cell>
							<Table.Cell>Create</Table.Cell>
							<Table.Cell>Edit</Table.Cell>
							<Table.Cell>Delete</Table.Cell>
							<Table.Cell>Checkout</Table.Cell>
							<Table.Cell>Checkin</Table.Cell>
						</Table.Row>
					</Table.Head>
					<Table.Body>

						<FormConsumer>{ ({ setData }) => {
							const setRow = (model: string, checked: boolean) => {
								setData(`${model}.view`, checked)
								setData(`${model}.create`, checked)
								setData(`${model}.edit`, checked)
								setData(`${model}.delete`, checked)
								setData(`${model}.checkout`, checked)
								setData(`${model}.checkin`, checked)
							}
							return <>
								<NestedFields model="items">
									<Table.Row>
										<Table.Cell>
											<Checkbox
												onClick={ e => setRow('user_group.permissions.items', e.target.checked) }
												disabled={ isSuperUser }
											/>
										</Table.Cell>
										<Table.Cell>Hardware</Table.Cell>
										<Table.Cell><Switch name="view" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="create" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="edit" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="delete" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="checkout" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="checkin" field={ false } disabled={ isSuperUser } /></Table.Cell>
									</Table.Row>
								</NestedFields>

								<NestedFields model="accessories">
									<Table.Row>
										<Table.Cell>
											<Checkbox
												onClick={ e => setRow('user_group.permissions.accessories', e.target.checked) }
												disabled={ isSuperUser }
											/>
										</Table.Cell>
										<Table.Cell>Accessories</Table.Cell>
										<Table.Cell><Switch name="view" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="create" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="edit" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="delete" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="checkout" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="checkin" field={ false } disabled={ isSuperUser } /></Table.Cell>
									</Table.Row>
								</NestedFields>

								<NestedFields model="components">
									<Table.Row>
										<Table.Cell>
											<Checkbox
												onClick={ e => setRow('user_group.permissions.components', e.target.checked) }
												disabled={ isSuperUser }
											/>
										</Table.Cell>
										<Table.Cell>Components</Table.Cell>
										<Table.Cell><Switch name="view" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="create" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="edit" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="delete" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="checkout" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="checkin" field={ false } disabled={ isSuperUser } /></Table.Cell>
									</Table.Row>
								</NestedFields>

								<NestedFields model="consumables">
									<Table.Row>
										<Table.Cell>
											<Checkbox
												onClick={ e => setRow('user_group.permissions.consumables', e.target.checked) }
												disabled={ isSuperUser }
											/>
										</Table.Cell>
										<Table.Cell>Consumables</Table.Cell>
										<Table.Cell><Switch name="view" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="create" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="edit" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="delete" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="checkout" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell></Table.Cell>
									</Table.Row>
								</NestedFields>

								<NestedFields model="licenses">
									<Table.Row>
										<Table.Cell>
											<Checkbox
												onClick={ e => setRow('user_group.permissions.licenses', e.target.checked) }
												disabled={ isSuperUser }
											/>
										</Table.Cell>
										<Table.Cell>Licenses</Table.Cell>
										<Table.Cell><Switch name="view" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="create" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="edit" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="delete" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="checkout" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="checkin" field={ false } disabled={ isSuperUser } /></Table.Cell>
									</Table.Row>
								</NestedFields>

								<NestedFields model="networks">
									<Table.Row>
										<Table.Cell>
											<Checkbox
												onClick={ e => setRow('user_group.permissions.networks', e.target.checked) }
												disabled={ isSuperUser }
											/>
										</Table.Cell>
										<Table.Cell>Networks</Table.Cell>
										<Table.Cell><Switch name="view" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="create" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="edit" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="delete" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell></Table.Cell>
										<Table.Cell></Table.Cell>
									</Table.Row>
								</NestedFields>

								<NestedFields model="vendors">
									<Table.Row>
										<Table.Cell>
											<Checkbox
												onClick={ e => setRow('user_group.permissions.vendors', e.target.checked) }
												disabled={ isSuperUser }
											/>
										</Table.Cell>
										<Table.Cell>Vendors</Table.Cell>
										<Table.Cell><Switch name="view" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="create" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="edit" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="delete" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell></Table.Cell>
										<Table.Cell></Table.Cell>
									</Table.Row>
								</NestedFields>

								<NestedFields model="contracts">
									<Table.Row>
										<Table.Cell>
											<Checkbox
												onClick={ e => setRow('user_group.permissions.contracts', e.target.checked) }
												disabled={ isSuperUser }
											/>
										</Table.Cell>
										<Table.Cell>Contracts</Table.Cell>
										<Table.Cell><Switch name="view" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="create" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="edit" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="delete" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell></Table.Cell>
										<Table.Cell></Table.Cell>
									</Table.Row>
								</NestedFields>

								<NestedFields model="categories">
									<Table.Row>
										<Table.Cell>
											<Checkbox
												onClick={ e => setRow('user_group.permissions.categories', e.target.checked) }
												disabled={ isSuperUser }
											/>
										</Table.Cell>
										<Table.Cell>Categories</Table.Cell>
										<Table.Cell><Switch name="view" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="create" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="edit" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="delete" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell></Table.Cell>
										<Table.Cell></Table.Cell>
									</Table.Row>
								</NestedFields>

								<NestedFields model="models">
									<Table.Row>
										<Table.Cell>
											<Checkbox
												onClick={ e => setRow('user_group.permissions.models', e.target.checked) }
												disabled={ isSuperUser }
											/>
										</Table.Cell>
										<Table.Cell>Models</Table.Cell>
										<Table.Cell><Switch name="view" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="create" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="edit" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="delete" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell></Table.Cell>
										<Table.Cell></Table.Cell>
									</Table.Row>
								</NestedFields>

								<NestedFields model="manufacturers">
									<Table.Row>
										<Table.Cell>
											<Checkbox
												onClick={ e => setRow('user_group.permissions.manufacturers', e.target.checked) }
												disabled={ isSuperUser }
											/>
										</Table.Cell>
										<Table.Cell>Manufacturers</Table.Cell>
										<Table.Cell><Switch name="view" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="create" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="edit" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="delete" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell></Table.Cell>
										<Table.Cell></Table.Cell>
									</Table.Row>
								</NestedFields>

								<NestedFields model="departments">
									<Table.Row>
										<Table.Cell>
											<Checkbox
												onClick={ e => setRow('user_group.permissions.departments', e.target.checked) }
												disabled={ isSuperUser }
											/>
										</Table.Cell>
										<Table.Cell>Departments</Table.Cell>
										<Table.Cell><Switch name="view" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="create" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="edit" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="delete" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell></Table.Cell>
										<Table.Cell></Table.Cell>
									</Table.Row>
								</NestedFields>

								<NestedFields model="locations">
									<Table.Row>
										<Table.Cell>
											<Checkbox
												onClick={ e => setRow('user_group.permissions.locations', e.target.checked) }
												disabled={ isSuperUser }
											/>
										</Table.Cell>
										<Table.Cell>Locations</Table.Cell>
										<Table.Cell><Switch name="view" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="create" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="edit" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell><Switch name="delete" field={ false } disabled={ isSuperUser } /></Table.Cell>
										<Table.Cell></Table.Cell>
										<Table.Cell></Table.Cell>
									</Table.Row>
								</NestedFields>
							</>
						} }</FormConsumer>
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
