import React from 'react'
import MenuLink from './MenuLink'
import { Routes } from '@/lib'
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

const Navigation = () => {
	const { setLayoutState } = useLayout()

	const handleNavClick = () => setLayoutState({ sidebarOpen: false })

	return (
		<>
			<div onClick={ handleNavClick }>
				<ul>
					<li><MenuLink href={ Routes.dashboard() } icon={ <DashboardIcon /> }>Dashboard</MenuLink></li>
					<li>
						<MenuLink href={ Routes.items() } icon={ <AssetsIcon /> }>Inventory</MenuLink>
						<ul>
							<li><MenuLink href={ Routes.items() } icon={ <ItemsIcon /> }>Hardware</MenuLink></li>
							<li><MenuLink href={ Routes.accessories() }icon={ <AccessoriesIcon /> }>Accessories</MenuLink></li>
							<li><MenuLink href={ Routes.components() }icon={ <ComponentsIcon /> }>Components</MenuLink></li>
							<li><MenuLink href={ Routes.consumables() }icon={ <ConsumablesIcon /> }>Consumables</MenuLink></li>
						</ul>
					</li>
					<li><MenuLink href={ Routes.licenses() } icon={ <LicensesIcon /> }>Licenses</MenuLink></li>
					<li><MenuLink href={ Routes.networks() } icon={ <NetworksIcon /> }>Networks</MenuLink></li>
					<li><MenuLink href={ Routes.people() } icon={ <PeopleIcon /> }>People</MenuLink></li>
					<li><MenuLink href="" icon={ <TicketsIcon /> }>Tickets</MenuLink></li>
					<li>
						<MenuLink href={ Routes.vendors() } icon={ <VendorsIcon /> }>Vendors</MenuLink>
						<ul>
							<li><MenuLink href={ Routes.contracts() } icon={ <ContractsIcon /> }>Contracts</MenuLink></li>
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
							<li><MenuLink href={ Routes.companies() } icon={ undefined }>Companies</MenuLink></li>
							<li><MenuLink href={ Routes.locations() } icon={ undefined }>Locations</MenuLink></li>
							<li><MenuLink href={ Routes.departments() } icon={ undefined }>Departments</MenuLink></li>
							<li><MenuLink href={ Routes.manufacturers() } icon={ undefined }>Manufacturers</MenuLink></li>
							<li><MenuLink href={ Routes.models() } icon={ undefined }>Models</MenuLink></li>
							<li><MenuLink href={ Routes.fields() } icon={ undefined }>Custom Fields</MenuLink></li>
						</ul>
					</li>
					<li><MenuLink href={ Routes.destroyUserSession() } icon={ <LogoutIcon /> }>Logout</MenuLink></li>
				</ul>
			</div>
		</>
	)
}

export default Navigation
