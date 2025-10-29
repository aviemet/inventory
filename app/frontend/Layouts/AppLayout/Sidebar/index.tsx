import React from 'react'
import { useLayoutStore } from '@/lib/store'
import { Divider, Group, AppShell, Icon, Box } from '@/components'
import cx from 'clsx'
import MenuLink from './MenuLink'
import { Routes } from '@/lib'
import {
	DashboardIcon,
	AssetsIcon,
	ItemsIcon,
	LicensesIcon,
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
	ReportsIcon,
	UsersIcon,
	CompaniesIcon,
	LocationsIcon,
	DepartmentsIcon,
	ManufacturersIcon,
	ModelsIcon,
	CategoriesIcon,
	UserGroupIcon,
	DocumentationIcon,
	PeopleIcon,
} from '@/components/Icons'

import IconProvider from '@/Layouts/Providers/IconProvider'
import * as classes from './Navigation.css'
// import * as classes from './Test'

const Sidebar = () => {
	const { sidebarOpen, toggleSidebarOpen } = useLayoutStore()

	const handleNavClick = () => toggleSidebarOpen(false)

	return (
		<IconProvider size='24px'>
			<AppShell.Navbar
				p={ 0 }
				hidden={ !sidebarOpen }
				className={ cx(classes.navbar, { [classes.closed]: !sidebarOpen }) }
				role="navigation"
			>
				<Box m="xs">
					<Group justify="space-between">
						<Icon radius="md" size="md">
							<ComponentsIcon />
						</Icon>
					</Group>
				</Box>

				<Box
					onClick={ handleNavClick }
					className={ cx([classes.links]) }
				>
					<ul aria-label="dashboard link">
						<li><MenuLink href={ Routes.dashboard() } icon={ <DashboardIcon /> }>Dashboard</MenuLink></li>
					</ul>

					<Divider />

					<ul aria-label="assets links">
						<li>
							<MenuLink href={ Routes.assets() } icon={ <AssetsIcon /> }>Inventory</MenuLink>
							<ul>
								<li><MenuLink href={ Routes.items() } icon={ <ItemsIcon /> }>Hardware</MenuLink></li>
								<li><MenuLink href={ Routes.accessories() } icon={ <AccessoriesIcon /> }>Accessories</MenuLink></li>
								<li><MenuLink href={ Routes.components() } icon={ <ComponentsIcon /> }>Components</MenuLink></li>
								<li><MenuLink href={ Routes.consumables() } icon={ <ConsumablesIcon /> }>Consumables</MenuLink></li>
							</ul>
						</li>
						<li><MenuLink href={ Routes.licenses() } icon={ <LicensesIcon /> }>Licenses</MenuLink></li>
						<li><MenuLink href={ Routes.networks() } icon={ <NetworksIcon /> }>Networks</MenuLink></li>
						<li><MenuLink href={ Routes.orders() } icon={ <PurchasesIcon /> }>Purchasing</MenuLink></li>
					</ul>

					<Divider />

					<ul aria-label="people links">
						<li>
							<MenuLink href={ Routes.people() } icon={ <PeopleIcon /> }>People</MenuLink>
							<ul>
								<li><MenuLink href={ Routes.personGroups() } icon={ <UserGroupIcon /> }>Groups</MenuLink></li>
							</ul>
						</li>
						<li>
							<MenuLink href={ Routes.vendors() } icon={ <VendorsIcon /> }>Vendors</MenuLink>
							<ul>
								<li><MenuLink href={ Routes.contracts() } icon={ <ContractsIcon /> }>Contracts</MenuLink></li>
							</ul>
						</li>
					</ul>

					<Divider />

					<ul aria-label="information links">
						<li><MenuLink href={ Routes.tickets() } icon={ <TicketsIcon /> }>Tickets</MenuLink></li>
						<li><MenuLink href={ Routes.documentations() } icon={ <DocumentationIcon /> }>Documentation</MenuLink></li>
						<li><MenuLink href={ Routes.reports() } icon={ <ReportsIcon /> }>Reports</MenuLink></li>
					</ul>
				</Box>

				<Box onClick={ handleNavClick } className={ cx([classes.links]) }>
					<ul aria-label="settings links">
						<li>
							<MenuLink href={ Routes.settingsGeneralIndex() } icon={ <SettingsIcon /> }>Settings</MenuLink>
							<ul className="up">
								<li><MenuLink href={ Routes.companies() } icon={ <CompaniesIcon /> }>Companies</MenuLink></li>
								<li><MenuLink href={ Routes.locations() } icon={ <LocationsIcon /> }>Locations</MenuLink></li>
								<li><MenuLink href={ Routes.departments() } icon={ <DepartmentsIcon /> }>Departments</MenuLink></li>
								<li><MenuLink href={ Routes.manufacturers() } icon={ <ManufacturersIcon /> }>Manufacturers</MenuLink></li>
								<li><MenuLink href={ Routes.models() } icon={ <ModelsIcon /> }>Models</MenuLink></li>
								<li><MenuLink href={ Routes.categories() } icon={ <CategoriesIcon /> }>Categories</MenuLink></li>
								<li><MenuLink href={ Routes.users() } icon={ <UsersIcon /> }>Users</MenuLink></li>
							</ul>
						</li>
						<li><MenuLink href={ Routes.destroyUserSession() } icon={ <LogoutIcon /> }>Logout</MenuLink></li>
					</ul>
				</Box>
			</AppShell.Navbar>
		</IconProvider>
	)
}

export default Sidebar
