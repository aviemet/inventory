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

						'.links > ul > li': {
							position: 'relative',
							borderLeft: '2px solid transparent',

							'&:hover': {
								width: 185,
								background: theme.colors.gray[1],
								borderLeft: `2px solid ${theme.primaryColor}`,

								'span, & > ul': {
									display: 'flex',
									background: theme.colors.gray[1],
								},
							},
						},

						'ul > li > ul': {
							display: 'none',
						},

						'span, ul > li > ul': {
							position: 'absolute',
							top: 0,
							left: 48,
							width: '100%',
						},

						span: {
							display: 'flex',
							height: '100%',
							alignItems: 'center',
						},

						'&.closed': {
							'span, ul > li > ul': {
								display: 'none',
							}
						}
					}
				} }
			>
				<Navbar.Section grow onClick={ handleNavClick } className="links">
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
				</Navbar.Section>

				<Navbar.Section onClick={ handleNavClick } className="links">
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
				</Navbar.Section>
			</Navbar>
		</IconProvider>
	)
}

export default Sidebar
