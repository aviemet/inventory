import React from 'react'
import { useLayout } from '@/Providers'
import { Navbar } from '@mantine/core'
import cx from 'clsx'
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

import IconProvider from '@/Providers/IconProvider'
import useNavigationStyles from './useNavigationStyles'

const Sidebar = () => {
	const { layoutState, setLayoutState } = useLayout()
	const{ classes } = useNavigationStyles()

	const handleNavClick = () => setLayoutState({ sidebarOpen: false })

	return (
		<IconProvider value={ { size: '24px' } }>
			<Navbar
				p={ 0 }
				hiddenBreakpoint="sm"
				hidden={ !layoutState.sidebarOpen }
				width={ { sm: layoutState.sidebarOpen ? 235 : 50 } }
				className={ cx(classes.root, { closed: !layoutState.sidebarOpen }) }
			>
				<Navbar.Section grow onClick={ handleNavClick } className="links">
					<ul>
						<li><MenuLink href={ Routes.dashboard() } icon={ <DashboardIcon /> }>Dashboard</MenuLink></li>
						<li>
							<MenuLink href={ Routes.items() } icon={ <AssetsIcon /> }>Inventory</MenuLink>
							<ul>
								<li><MenuLink href={ Routes.items() } icon={ <ItemsIcon /> }>Hardware</MenuLink></li>
								<li><MenuLink href={ Routes.accessories() } icon={ <AccessoriesIcon /> }>Accessories</MenuLink></li>
								<li><MenuLink href={ Routes.components() } icon={ <ComponentsIcon /> }>Components</MenuLink></li>
								<li><MenuLink href={ Routes.consumables() } icon={ <ConsumablesIcon /> }>Consumables</MenuLink></li>
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
				</Navbar.Section>

				<Navbar.Section onClick={ handleNavClick } className="links">
					<ul>
						<li>
							<MenuLink href={ Routes.settings() } icon={ <SettingsIcon /> }>Settings</MenuLink>
							<ul className="up">
								<li><MenuLink href={ Routes.companies() }>Companies</MenuLink></li>
								<li><MenuLink href={ Routes.locations() }>Locations</MenuLink></li>
								<li><MenuLink href={ Routes.departments() }>Departments</MenuLink></li>
								<li><MenuLink href={ Routes.manufacturers() }>Manufacturers</MenuLink></li>
								<li><MenuLink href={ Routes.models() }>Models</MenuLink></li>
								<li><MenuLink href={ Routes.fields() }>Custom Fields</MenuLink></li>
							</ul>
						</li>
						<li><MenuLink href={ Routes.destroyUserSession() } icon={ <LogoutIcon /> }>Logout</MenuLink></li>
					</ul>
				</Navbar.Section>
			</Navbar>
		</IconProvider>
	)
}

export default Sidebar
