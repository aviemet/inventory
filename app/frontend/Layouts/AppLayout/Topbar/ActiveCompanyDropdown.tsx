import React from 'react'
import { Form, SearchableDropdown } from '@/Components/Form'
import { Title } from '@mantine/core'
import { isEmpty } from 'lodash'
import { Routes } from '@/lib'
import { router } from '@inertiajs/react'
import { type UseFormProps } from 'use-inertia-form'

const ActiveCompany = ({ user }: { user: Schema.User }) => {
	if(!user?.companies || isEmpty(user.companies)) {
		return <Title order={ 3 }>Inventory Application</Title>
	}

	if(user.companies.length === 1) {
		return <Title order={ 3 }>{ user.active_company!.name }</Title>
	}

	const handleFormChange = (form: UseFormProps) => {
		if(String(form.data.user.active_company_id) === String(user.active_company_id)) return

		form.submit().then(() => {
			router.reload()
		})
	}

	return (
		<Form
			async
			grid={ false }
			data={ { user: { active_company_id: user.active_company?.id }  } }
			to={ Routes.apiUser(user.id) }
			method="patch"
			model="user"
			onChange={ handleFormChange }
		>
			<SearchableDropdown
				name="active_company_id"
				options={ user.companies || [] }
				getLabel={ option => option.name }
				getValue={ option => String(option.id) }
				clearable={ false }
				searchable={ false }
				field={ false }
				sx={ {
					width: 'fit-content',
					input:{
						backgroundColor: 'transparent',
					},
				} }
			/>
		</Form>
	)
}

export default ActiveCompany
