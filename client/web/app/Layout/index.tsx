import React, { useState } from 'react';
import './styles.less';
import { Link } from 'react-router-dom';
import './styles.less';
import styled from 'styled-components';
import { 
	MenuRounded as MenuIcon,
	DashboardRounded as DashboardIcon,
	ImportantDevicesRounded as DevicesIcon,
	SaveRounded as SaveIcon,
	KeyboardRounded as KeyboardIcon,
	OpacityRounded as DropIcon,
	PeopleRounded as PeopleIcon,
	SettingsRounded as SettingsIcon,
	BarChartOutlined as ChartIcon
} from '@material-ui/icons';

/**
 * Less confusing way to represent the main navigation menu
 */
const navigationMenuValues = [
	{ to: '/dashboard', title: 'Dashboard', icon: DashboardIcon, subnav: [] },
	{ to: '/inventory', title: 'Inventory', icon: DevicesIcon, subnav: [] },
	{ to: '/licenses', title: 'Licenses', icon: SaveIcon, subnav: [] },
	{ to: '/accessories', title: 'Accessories', icon: KeyboardIcon, subnav: [] },
	{ to: '/consumables', title: 'Consumables', icon: DropIcon, subnav: [] },
	{ to: '/people', title: 'People', icon: PeopleIcon, subnav: [] },
	{ to: '/settings', title: 'Settings', icon: SettingsIcon, subnav: [
		{ title: 'Companies', to: '/settings/companies' },
		{ title: 'Departments', to: '/settings/departments' }
	] },
	{ to: '/reports', title: 'Reports', icon: ChartIcon, subnav: [] }
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
		<WebLayoutContainer>
			<SideBar className={ isMenuOpen ? 'open' : '' }>
				<div id='menuToggle' onClick={ toggleMenu }>
					<MenuIcon color='primary' fontSize='large' />
				</div>

				<div id='navMenu'>
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
									{ nav.subnav.length > 0 && <ul>
										{ nav.subnav.map((nav, j) => (
											<li key={ j }><Link to={ nav.to }>{ nav.title }</Link></li>
										)) }
									</ul> }
								</li>
							);
						} ) }
					</ul>
				</div>
			</SideBar>

			<ContentContainer>
				{ children }
			</ContentContainer>

		</WebLayoutContainer>
	);
};

const iconLeftPadding = 8;

const WebLayoutContainer = styled.div`
	width: 100%;
	height: 100%;
`;

const SideBar = styled.div`
	width: ${({ theme }) => theme.navMenu.width.closed }px;
	background: #222;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	transition: width 0.1s ease-out;
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

const ContentContainer = styled.div`
	max-width: 1100px;
	margin: 0 auto;
`;

export default WebLayout;