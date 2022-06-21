import React from 'react'
import { SearchableDropdown } from '@/Components/Inputs'
import { Title } from '@mantine/core'
import { isEmpty } from 'lodash'

const ActiveCompany = ({ user }: { user: Schema.User }) => {
	if(!user || !user.companies || isEmpty(user.companies)) return <Title order={ 3 }>Inventory Application</Title>

	if(user.companies.length === 1) return <Title order={ 3 }>{ user.active_company!.name }</Title>

	return (
		<SearchableDropdown
			defaultValue={ String(user.active_company?.id) || '' }
			options={ user.companies || [] }
			getLabel={ option => option.name }
			getValue={ option => option.id }
			onChange={ option => {
				if(option.id !== user.active_company_id) {
					// submit form (this should be wrapped in a form)
				}
			} }
		/>
	)
}

export default ActiveCompany
