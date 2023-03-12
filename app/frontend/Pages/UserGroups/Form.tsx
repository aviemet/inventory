import React from 'react'
import {
	Form,
	TextInput,
	Submit,
} from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

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
	return (
		<Form
			model="user_group"
			data={ { user_group } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<Submit>
				{ user_group.id ? 'Update' : 'Create' } Group
			</Submit>
		</Form>
	)
}

export default React.memo(GroupForm)
