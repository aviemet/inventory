import React from 'react'
import MenuLink from './MenuLink'
import { Routes } from '@/lib'
import { Link } from '@/Components'
import {
	DashboardIcon,
	AssetsIcon,
	ItemsIcon,
	LicensesIcon,
	PeopleIcon,
	TicketsIcon,
	NetworksIcon,
	VendorsIcon,
	PurchasesIcon,
	SettingsIcon,
	LogoutIcon,
	AccessoriesIcon,
	ComponentsIcon,
	ConsumablesIcon,
	ContractsIcon,
} from '@/Components/Icons'
import { useLayout } from '@/Providers'

// import './divigation.css'

const Navigation = () => {
	const { layoutState, setLayoutState } = useLayout()

	const handleNavClick = () => setLayoutState({ sidebarOpen: false })

	return (
		<>
			<div onClick={ handleNavClick }>
				<ul>
					<li><MenuLink href={ Routes.dashboard() } icon={ <DashboardIcon /> }>Dashboard</MenuLink></li>
					<li>
						<MenuLink href={ Routes.items() } icon={ <AssetsIcon /> }>Inventory</MenuLink>
						<ul>
							<li><Link href={ Routes.items() }><ItemsIcon />Hardware</Link></li>
							<li><Link href={ Routes.accessories() }><AccessoriesIcon />Accessories</Link></li>
							<li><Link href={ Routes.components() }><ComponentsIcon />Components</Link></li>
							<li><Link href={ Routes.consumables() }><ConsumablesIcon />Consumables</Link></li>
						</ul>
					</li>
					<li><MenuLink href={ Routes.licenses() } icon={ <LicensesIcon /> }>Licenses</MenuLink></li>
					<li><MenuLink href={ Routes.networks() } icon={ <NetworksIcon /> }>Networks</MenuLink></li>
					<li><MenuLink href={ Routes.people() } icon={ <PeopleIcon /> }>People</MenuLink></li>
					<li><MenuLink href="" icon={ <TicketsIcon /> }>Tickets</MenuLink></li>
					<li>
						<MenuLink href={ Routes.vendors() } icon={ <VendorsIcon /> }>Vendors</MenuLink>
						<ul>
							<li><Link href={ Routes.contracts() }><ContractsIcon />Contracts</Link></li>
						</ul>
					</li>
					<li><MenuLink href={ Routes.orders() } icon={ <PurchasesIcon /> }>Purchasing</MenuLink></li>
				</ul>
			</div>

			<div onClick={ handleNavClick }>
				<ul>
					<li>
						<MenuLink href={ Routes.settings() } icon={ <SettingsIcon /> }>Settings</MenuLink>
						<ul className="up">
							<li><Link href={ Routes.companies() }>Companies</Link></li>
							<li><Link href={ Routes.locations() }>Locations</Link></li>
							<li><Link href={ Routes.departments() }>Departments</Link></li>
							<li><Link href={ Routes.manufacturers() }>Manufacturers</Link></li>
							<li><Link href={ Routes.models() }>Models</Link></li>
							<li><Link href={ Routes.fields() }>Custom Fields</Link></li>
						</ul>
					</li>
					<li><MenuLink href={ Routes.destroyUserSession() } icon={ <LogoutIcon /> }>Logout</MenuLink></li>
				</ul>
			</div>
		</>
	)
}

export default Navigation
