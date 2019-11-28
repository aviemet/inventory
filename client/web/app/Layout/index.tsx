import React, { useState } from 'react';
import './styles.less';
import styled from 'styled-components';
import { 	MenuRounded as MenuIcon } from '@material-ui/icons';
import NavMenu from './NavMenu';

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
				<NavMenu onNavigate={ onMenuNavigation } />
			</SideBar>
			<ContentContainer>
				{ children }
			</ContentContainer>
		</WebLayoutContainer>
	);
};

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

	&.open {
		width: ${({ theme }) => theme.navMenu.width.open }px;

		#navMenu {
			li {
				& span {
					display: inline-block;
					width: ${({ theme }) => theme.navMenu.width.open - theme.navMenu.link.leftPadding - theme.navMenu.width.closed }px;
					padding-left: ${({ theme }) => theme.navMenu.width.closed + theme.navMenu.link.leftPadding }px;
				}
			}
		}
	}

	#menuToggle {
		text-align: right;
		padding: 8px 8px 0 0;
	}
`;

const ContentContainer = styled.div`
	max-width: 1100px;
	margin: 0 auto;
`;

export default WebLayout;