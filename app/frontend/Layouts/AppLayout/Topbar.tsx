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
				</div>

				<div>User Menu</div>
			</div>
		</header>
	)
}

export default Topbar
