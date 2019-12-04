import React, { useState } from 'react';
import './styles.less';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
	MenuRounded as MenuIcon,
	DashboardRounded as DashboardIcon,
	ImportantDevicesRounded as DevicesIcon,
	SaveRounded as SaveIcon,
	KeyboardRounded as KeyboardIcon,
	OpacityRounded as DropIcon,
	PeopleRounded as PeopleIcon,
	BusinessRounded as VendorsIcon,
	ShoppingCart as PurchasesIcon,
	SettingsRounded as SettingsIcon,
	BarChartOutlined as ChartIcon,
	TimeToLeave as LogoutIcon
} from '@material-ui/icons';
import UserMenu from './UserMenu';

const navigationMenuValues = [
	{ to: '/dashboard', title: 'Dashboard', icon: DashboardIcon },
	{ to: '/inventory', title: 'Inventory', icon: DevicesIcon },
	{ to: '/licenses', title: 'Licenses', icon: SaveIcon },
	{ to: '/accessories', title: 'Accessories', icon: KeyboardIcon },
	{ to: '/consumables', title: 'Consumables', icon: DropIcon },
	{ to: '/people', title: 'People', icon: PeopleIcon },
	{ to: '/vendors', title: 'Vendors', icon: VendorsIcon },
	{ to: '/purchases', title: 'Purchases', icon: PurchasesIcon },
	{ to: '/settings', title: 'Settings', icon: SettingsIcon, subnav: [
		{ title: 'Companies', to: '/settings/companies' },
		{ title: 'Departments', to: '/settings/departments' }
	] },
	{ to: '/reports', title: 'Reports', icon: ChartIcon }
];

const WebLayout: React.FC = ({ children }) => {
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const onMenuNavigation = e => {
		setIsMenuOpen(false);
	};

	return (
		<WebLayoutContainer id="wrapper">
			<SideBar className={ isMenuOpen ? 'open' : '' }>
				<div id='menuToggle' onClick={ toggleMenu }>
					<MenuIcon color='primary' fontSize='large' />
				</div>

				<nav id='navMenu'>
					<ul>
						{/* Iterate through menu items to render links and subnav menus */}
						{ navigationMenuValues.map((nav, i) => {
							const Icon = nav.icon;

							return (
								<li onClick={ onMenuNavigation } key={ i }>
									{/* Top level link with icon */}
									<Link to={ nav.to }>
										<Icon color='primary' fontSize='small' />
										<span>{ nav.title }</span>
									</Link>

									{/* Subnavigation menus */}
									{ nav.subnav && <ul>
										{ nav.subnav.map((nav, j) => (
											<li key={ j }><Link to={ nav.to }>{ nav.title }</Link></li>
										)) }
									</ul> }
								</li>
							);
						} ) }
					</ul>

					<LogoutContainer>
						<Link to='/logout'><LogoutIcon /></Link>
					</LogoutContainer>
				</nav>
			</SideBar>

			<Content className={ isMenuOpen ? 'open' : '' }>
				<TopBar>
					<UserMenu />
				</TopBar>

				<ContentContainer>
					{ children }
				</ContentContainer>
			</Content>

		</WebLayoutContainer>
	);
};

const iconLeftPadding = 8;

const WebLayoutContainer = styled.div`
	position: static;
	overflow: hidden;
`;

const SideBar = styled.aside`
	width: ${({ theme }) => theme.navMenu.width.closed }px;
	background: #222;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	transition: width ${({ theme }) => theme.navMenu.transition.time }ms ${({ theme }) => theme.navMenu.transition.easing };
	cursor: pointer;
	z-index: 1000;

	#menuToggle {
		text-align: right;
		padding: 8px 8px 0 0;
	}

	&.open {
		width: ${({ theme }) => theme.navMenu.width.open }px;

		#navMenu {
			& > ul {
				& > li {
					span {
						display: inline-block;
						width: ${({ theme }) => theme.navMenu.width.open - theme.navMenu.link.leftPadding - theme.navMenu.width.closed }px;
						padding-left: ${({ theme }) => theme.navMenu.width.closed + theme.navMenu.link.leftPadding }px;
					}

					/* Prevent showing the subnav on hover when nav menu is open */
					&:hover {
						ul {
							display: none;
						}
					}
				}
			}
		}
	}

	#navMenu {
		text-align: left;
	
		a {
			color: #FFF;
			text-decoration: none;
			font-size: 1.2rem;
			font-weight: normal;
		}

		ul {
			list-style: none;
			padding: 0;

			li {
				margin: 0;
				height: ${({ theme }) => theme.navMenu.link.height }px;
			}
		}

		& > ul {

			& > li {
				padding: 0 0 0 ${ iconLeftPadding }px;
				position: relative;

				& > ul {
					display: none;
					position: absolute;
					top: ${({ theme }) => theme.navMenu.link.height }px;
					left: ${({ theme }) => theme.navMenu.width.closed - theme.navMenu.link.border.left.width }px;
					background: #333;
					width: ${({ theme }) => theme.navMenu.width.open - theme.navMenu.width.closed }px;

					& > li {
						padding: 0;
						line-height: ${({ theme }) => theme.navMenu.link.height - theme.navMenu.link.border.bottom.width }px;
						border-bottom: ${({ theme }) => theme.navMenu.link.border.bottom.width }px solid ${({ theme }) => theme.navMenu.link.border.bottom.color };

						a {
							display: block;
							padding-left: ${({ theme }) => theme.navMenu.link.leftPadding }px;
						}
					}
				}

				& svg {
					padding: 10px 0 ${ iconLeftPadding }px 5px;
					position: relative;
					z-index: 990;
				}

				& span {
					display: none;
					height: ${({ theme }) => theme.navMenu.link.height }px;
					position: absolute;
					left: 0;
					top: 0;
					margin: 0;
					padding: 0;
					line-height: ${({ theme }) => theme.navMenu.link.height }px;
					z-index: 980;
				}

				&:hover {
					display: inline-block;
					padding-left: ${({ theme }) => iconLeftPadding - theme.navMenu.link.border.left.width }px;
					border-left: ${({ theme }) => theme.navMenu.link.border.left.width }px solid ${({ theme }) => theme.navMenu.link.border.left.color };

					span {
						display: block;
						background: #222;
						padding-left: ${({ theme }) => theme.navMenu.width.closed + theme.navMenu.link.leftPadding - theme.navMenu.link.border.left.width }px !important;
						width: ${({ theme }) => theme.navMenu.width.open - theme.navMenu.width.closed - theme.navMenu.link.leftPadding }px;
					}

					& > ul {
						display: block;

						& > li:hover {
							background: #444;
						}
					}
				}
			}
		}
	} 
`;

const LogoutContainer = styled.div`
	position: absolute;
	bottom: 0;
`;

const TopBar = styled.header`
	position: absolute;
	top: 0;
	width: 100%;
	height: ${({ theme }) => theme.topBar.height }px;
	background: #CCC;
`;

const Content = styled.div`
	position: relative;
	margin-left: ${({ theme }) => theme.navMenu.width.closed}px;
	transition: margin ${({ theme }) => theme.navMenu.transition.time }ms ${({ theme }) => theme.navMenu.transition.easing };

	&.open {
		margin-left: ${({ theme }) => theme.navMenu.width.open}px;
	}

	&:before {
		content: ' ';
		display: block;
		width: 100%;
		height: 1px;
	}
`;

const ContentContainer = styled.main`
	max-width: 1100px;
	margin: ${({ theme }) => theme.topBar.height }px auto 0 auto;
`;

export default WebLayout;