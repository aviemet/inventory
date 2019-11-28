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

const NavMenuItem = ({ link, title, icon }) => {
	const Icon = icon;

	return (
		<li>
			<Link to={ link }>
				<Icon color='primary' fontSize='small' />
				<span>{ title }</span>
			</Link>
		</li>
	);
};

const NavMenu = () => {
	return (
		<NavMenuContainer id='navMenu'>
			<ul>
				<NavMenuItem link='/dashboard' title='Dashboard' icon={ DashboardIcon } />
				<NavMenuItem link='/inventory' title='Inventory' icon={ DevicesIcon } />
				<NavMenuItem link='/licenses' title='Licenses' icon={ SaveIcon } />
				<NavMenuItem link='/accessories' title='Accessories' icon={ KeyboardIcon } />
				<NavMenuItem link='/consumables' title='Consumables' icon={ DropIcon } />
				<NavMenuItem link='/people' title='People' icon={ PeopleIcon } />
				<NavMenuItem link='/settings' title='Settings' icon={ SettingsIcon } />
				<NavMenuItem link='/reports' title='Reports' icon={ ChartIcon } />
			</ul>
		</NavMenuContainer>
	);
};

const NavMenuContainer = styled.div`
	text-align: left;

	ul {
		list-style: none;
		padding: 0;

		li {
			padding: 0 0 0 8px;
			margin: 0;
			position: relative;

			& svg {
				padding: 10px 0 3px 5px;
			}

			& span {
				display: none;
				width: 155px;
				height: 35px;
				position: absolute;
				left: 30px;
				top: 0;

				color: #FFF;
				font-size: 1.2rem;
				margin: 0;
				padding: 9px 0 0 20px;
				font-weight: normal;
				text-decoration: none;
			}

			&:hover {
				display: inline-block;
				padding-left: 5px;
				border-left: 3px solid orange;

				span {
					display: block;
					background: #222;
				}
			}
		}
	}
`;

export default NavMenu;
