import React from 'react'
import {
	MdMenu,
	MdDashboard,
	MdImportantDevices,
	MdSave,
	MdSettingsEthernet,
	MdPeople,
	MdConfirmationNumber,
	MdBusiness,
	MdShoppingCart,
	MdSettings,
	MdExitToApp
} from 'react-icons/md'
import MenuLink from './MenuLink'
import { Routes } from '@/lib'
import { Link } from '@/Components'
import { useLayout } from '@/Providers'
import { IconContext } from 'react-icons'

const Sidebar = () => {
	const { layoutState, setLayoutState } = useLayout()

	return (
		<IconContext.Provider value={ { size: '24px', className: 'react-icon' } }>
			<aside id="sidebar">
				<div>
					<div className="link-hover" onClick={ () => setLayoutState({ sidebarOpen: !layoutState.sidebarOpen }) }>
						<MdMenu />
					</div>

					<nav className="links">
						<ul>
							<li><MenuLink href={ Routes.dashboard() } icon={ <MdDashboard /> }>Dashboard</MenuLink></li>
							<li>
								<MenuLink href={ Routes.items() } icon={ <MdImportantDevices /> }>Inventory</MenuLink>
								<ul>
									<li><Link href={ Routes.items() }>Hardware</Link></li>
									<li><Link href={ Routes.accessories() }>Accessories</Link></li>
									<li><Link href={ Routes.components() }>Components</Link></li>
									<li><Link href={ Routes.consumables() }>Consumables</Link></li>
								</ul>
							</li>
							<li><MenuLink href={ Routes.licenses() } icon={ <MdSave /> }>Licenses</MenuLink></li>
							<li><MenuLink href={ Routes.networks() } icon={ <MdSettingsEthernet /> }>Networks</MenuLink></li>
							<li><MenuLink href={ Routes.people() } icon={ <MdPeople /> }>People</MenuLink></li>
							<li><MenuLink href="" icon={ <MdConfirmationNumber /> }>Tickets</MenuLink></li>
							<li>
								<MenuLink href={ Routes.vendors() } icon={ <MdBusiness /> }>Vendors</MenuLink>
								<ul>
									<li><Link href={ Routes.contracts() }>Contracts</Link></li>
								</ul>
							</li>
							<li><MenuLink href={ Routes.orders() } icon={ <MdShoppingCart /> }>Purchasing</MenuLink></li>
						</ul>
					</nav>
				</div>

				<div>
					<div className="links">
						<ul>
							<li>
								<MenuLink href={ Routes.settings() } icon={ <MdSettings /> }>Settings</MenuLink>
								<ul className="up">
									<li><Link href={ Routes.companies() }>Companies</Link></li>
									<li><Link href={ Routes.manufacturers() }>Manufacturers</Link></li>
									<li><Link href={ Routes.models() }>Models</Link></li>
									<li><Link href={ Routes.fields() }>Custom Fields</Link></li>
								</ul>
							</li>
							<li><MenuLink href={ Routes.destroyUserSession() } icon={ <MdExitToApp /> }>Logout</MenuLink></li>
						</ul>
					</div>
				</div>

			</aside>
		</IconContext.Provider>
	)
}

export default Sidebar

