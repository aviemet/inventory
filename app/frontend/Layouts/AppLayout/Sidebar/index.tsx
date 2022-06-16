import React from 'react'
import { useLayout } from '@/Providers'
import { Navbar, useMantineTheme } from '@mantine/core'
import cn from 'classnames'
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

import './sidebar.css'
import IconProvider from '@/Providers/IconProvider'

const Sidebar = () => {
	const { layoutState, setLayoutState } = useLayout()
	const theme = useMantineTheme()

	const handleNavClick = () => setLayoutState({ sidebarOpen: false })

	return (
		<IconProvider value={ { size: '24px' } }>
			<Navbar
				p={ 0 }
				hiddenBreakpoint="sm"
				hidden={ !layoutState.sidebarOpen }
				width={ { sm: layoutState.sidebarOpen ? 235 : 50 } }
				className={ cn({ closed: !layoutState.sidebarOpen }) }
				styles={ {
					root: {
						transition: 'width 100ms ease-in-out, min-width 100ms ease-in-out',

						'&.closed': {
							'span, ul ul': {
								display: 'none',
							},

							'ul > li > ul': {
								top: '100%',
								left: 48,

								'&.up': {
									top: 'unset',
									bottom: '100%',
								},
							},
						},

						'.links > ul > li:hover': {
							width: 185,
						},

						'ul li': {
							position: 'relative',
							borderLeft: '2px solid transparent',

							'&:hover': {
								background: theme.colors.gray[1],
								borderLeft: `2px solid ${theme.primaryColor}`,

								'span, & ul': {
									display: 'flex',
									background: theme.colors.gray[1],
								},
							},
						},

						'ul > li > ul': {
							display: 'none',
							flexDirection: 'column',
							width: '100%',
							left: 'calc(100% + 48px)',
							top: 0,

							'&.up': {
								top: 'unset',
								bottom: 0,
							},

							span: {
								width: 'calc(100% - 48px)',
							}
						},

						'span, ul > li > ul': {
							position: 'absolute',
							width: '100%',
						},

						span: {
							display: 'flex',
							height: '100%',
							alignItems: 'center',
							top: 0,
							left: 48,
						},
					}
				} }
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
