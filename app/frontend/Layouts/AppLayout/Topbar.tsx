import React from 'react'
import { SearchableDropdown } from '@/Components/Inputs'
import { MdMenu } from 'react-icons/md'
import { useAuth } from '@/Providers'

const Topbar = () => {
	const { user } = useAuth()

	return (
		<header id="topbar">
			<div className="flex">
				<div className="sm:hidden cursor-pointer">
					<MdMenu id="topbar-menu-toggle" />
				</div>

				<div className="flex-1">
					<ActiveCompany user={ user } />
				</div>

				<div>User Menu</div>
			</div>
		</header>
	)
}

const ActiveCompany = ({ user }: { user: Schema.User }) => {
	if(!user || !user.companies) return <h3 className="text-brand-dark">Inventory Application</h3>

	// User model ensures active_company is not null if user has associated companies
	if(user.companies.length <= 1) return <h3 className="text-brand-dark">{ user.active_company!.name }</h3>

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

export default Topbar
