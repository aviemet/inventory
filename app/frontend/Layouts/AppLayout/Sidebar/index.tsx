import React, { useLayoutEffect, useState } from 'react'
import { useLayoutStore } from '@/Layouts/Providers'
import { Group, Navbar, Text, ThemeIcon, useMantineTheme } from '@mantine/core'
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
} from '@/Components/Icons'

import IconProvider from '@/Layouts/Providers/IconProvider'
import useNavigationStyles from './useNavigationStyles'

const Sidebar = () => {
	const { sidebarOpen, toggleSidebarOpen } = useLayoutStore()
	const theme = useMantineTheme()
	const { classes } = useNavigationStyles()
	const [siteTitleHidden, setSiteTitleHidden] = useState(false)

	const handleNavClick = () => toggleSidebarOpen(false)

	// Delay text to avoid layout shift when opening/closing sidebar
	useLayoutEffect(() => {
		const ms = sidebarOpen ? 100 : 0
		setTimeout(() => {
			setSiteTitleHidden(!sidebarOpen)
		}, ms)
	}, [sidebarOpen])

	return (
		<IconProvider value={ { size: '24px' } }>
			<Navbar
				p={ 0 }
				hiddenBreakpoint="sm"
				hidden={ !sidebarOpen }
				width={ { sm: sidebarOpen ? theme.other.navbar.width.open : theme.other.navbar.width.closed } }
				className={ cx(classes.root, { closed: !sidebarOpen }) }
			>
				<Navbar.Section m="xs">
					<Group position='apart'>
						<ThemeIcon radius="md" size="lg">
							<ComponentsIcon />
						</ThemeIcon>
						<Text className={ cx({ hidden: siteTitleHidden }) }>Inventory</Text>
					</Group>
				</Navbar.Section>
				<Navbar.Section grow onClick={ handleNavClick } className="links">
					<ul>
						<li><MenuLink href={ Routes.dashboard() } icon={ <DashboardIcon /> }>Dashboard</MenuLink></li>
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
						<li>
							<MenuLink href={ Routes.people() } icon={ <UsersIcon /> }>People</MenuLink>
							<ul>
								{ /* <li><MenuLink href={ Routes.users() } icon={ <PeopleIcon /> }>Users</MenuLink></li> */ }
								<li><MenuLink href={ Routes.personGroups() } icon={ <UserGroupIcon /> }>Groups</MenuLink></li>
							</ul>
						</li>
						<li><MenuLink href={ Routes.tickets() } icon={ <TicketsIcon /> }>Tickets</MenuLink></li>
						<li><MenuLink href={ Routes.documentations() } icon={ <DocumentationIcon /> }>Documentation</MenuLink></li>
						<li>
							<MenuLink href={ Routes.vendors() } icon={ <VendorsIcon /> }>Vendors</MenuLink>
							<ul>
								<li><MenuLink href={ Routes.contracts() } icon={ <ContractsIcon /> }>Contracts</MenuLink></li>
							</ul>
						</li>
						<li><MenuLink href={ Routes.orders() } icon={ <PurchasesIcon /> }>Purchasing</MenuLink></li>
						<li><MenuLink href={ Routes.reports() } icon={ <ReportsIcon /> }>Reports</MenuLink></li>
					</ul>
				</Navbar.Section>

				<Navbar.Section onClick={ handleNavClick } className="links">
					<ul>
						<li>
							<MenuLink href={ Routes.settingsGeneralIndex() } icon={ <SettingsIcon /> }>Settings</MenuLink>
							<ul className="up">
								<li><MenuLink href={ Routes.companies() } icon={ <CompaniesIcon /> }>Companies</MenuLink></li>
								<li><MenuLink href={ Routes.locations() } icon={ <LocationsIcon /> }>Locations</MenuLink></li>
								<li><MenuLink href={ Routes.departments() } icon={ <DepartmentsIcon /> }>Departments</MenuLink></li>
								<li><MenuLink href={ Routes.manufacturers() } icon={ <ManufacturersIcon /> }>Manufacturers</MenuLink></li>
								<li><MenuLink href={ Routes.models() } icon={ <ModelsIcon /> }>Models</MenuLink></li>
								<li><MenuLink href={ Routes.categories() } icon={ <CategoriesIcon /> }>Categories</MenuLink></li>
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
