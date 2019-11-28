import React from 'react';
import { Link } from 'react-router-dom';
import './styles.less';
import styled from 'styled-components';
import { 
	DashboardRounded as DashboardIcon,
	ImportantDevicesRounded as DevicesIcon,
	SaveRounded as SaveIcon,
	KeyboardRounded as KeyboardIcon,
	OpacityRounded as DropIcon,
	PeopleRounded as PeopleIcon,
	SettingsRounded as SettingsIcon,
	BarChartOutlined as ChartIcon
} from '@material-ui/icons';

const NavMenu = ({ onNavigate }) => {

	const NavMenuItem = ({ link, title, icon, subNav }) => {
		const Icon = icon;
	
		return (
			<li onClick={ onNavigate }>
				<Link to={ link }>
					<Icon color='primary' fontSize='small' />
					<span>{ title }</span>
				</Link>
				{ subNav.length > 0 && <ul>
					{ subNav.map((nav, i) => (
						<li key={ i }><Link to={ nav.to }>{ nav.title }</Link></li>
					)) }
				</ul> }
			</li>
		);
	};

	return (
		<NavMenuContainer id='navMenu'>
			<ul>
				<NavMenuItem link='/dashboard' title='Dashboard' icon={ DashboardIcon } subNav={ [

				]} />
				<NavMenuItem link='/inventory' title='Inventory' icon={ DevicesIcon } subNav={ [

				]} />
				<NavMenuItem link='/licenses' title='Licenses' icon={ SaveIcon } subNav={ [

				]} />
				<NavMenuItem link='/accessories' title='Accessories' icon={ KeyboardIcon } subNav={ [

				]} />
				<NavMenuItem link='/consumables' title='Consumables' icon={ DropIcon } subNav={ [

				]} />
				<NavMenuItem link='/people' title='People' icon={ PeopleIcon } subNav={ [

				]} />
				<NavMenuItem link='/settings' title='Settings' icon={ SettingsIcon } subNav={ [
					{ title: 'Companies', to: '/settings/companies' },
					{ title: 'Departments', to: '/settings/departments' }
				]} />
				<NavMenuItem link='/reports' title='Reports' icon={ ChartIcon } subNav={ [

				]} />
			</ul>
		</NavMenuContainer>
	);
};

const iconLeftPadding = 8;

const NavMenuContainer = styled.div`
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
				width: ${({ theme }) => theme.navMenu.width.open - theme.navMenu.width.closed - theme.navMenu.link.border.left.width + theme.navMenu.link.leftPadding }px;

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
					width: ${({ theme }) => theme.navMenu.width.open - theme.navMenu.width.closed - theme.navMenu.link.border.left.width }px;
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
`;

export default NavMenu;
