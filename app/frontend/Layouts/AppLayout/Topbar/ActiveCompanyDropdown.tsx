import React from 'react'
import { SearchableDropdown } from '@/Components/Inputs'
import { isEmpty } from 'lodash'
import 'twin.macro'

const ActiveCompany = ({ user }: { user: Schema.User }) => {
	if(!user || !user.companies || isEmpty(user.companies)) return <h3 tw="text-brand-dark">Inventory Application</h3>

	if(user.companies.length === 1) return <h3 tw="text-brand-dark">{ user.active_company!.name }</h3>

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
