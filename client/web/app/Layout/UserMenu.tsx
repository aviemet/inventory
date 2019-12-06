import React, { useState, useRef, useLayoutEffect } from 'react'
import { useUser } from '@repo/common/Stores';
import { Select, MenuItem, Button, Menu, Fab } from '@material-ui/core';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const UserMenu = () => {
	const [ menuAnchor, setMenuAnchor ] = useState();

	const user = useUser();

	const handleCompanySelect = e => {
		user.activeCompany = e.target.value;
	};

	const openMenu = e => {
		setMenuAnchor(e.currentTarget);
	};

	const closeMenu = () => {
		setMenuAnchor(null);
	}

	if(!user.isLoggedIn) return <></>

	return (
		<MenuContainer>
			<h1 id='logo'>IT Asset Management</h1>
			<div className='right'>
				<Fab
					id='user-menu-button'
					onClick={ openMenu }
					size='small'
					color='secondary'
				>{ user.shortName }</Fab>
				<Menu
					id='user-menu'
					anchorEl={ menuAnchor }
					getContentAnchorEl={ null }
					keepMounted
					open={ Boolean(menuAnchor) }
					onClose={ closeMenu }
					anchorOrigin={ { 
						vertical: 'bottom',
						horizontal: 'right'
					} }
				>
					{ user.companies.map(({ company }) => (
						<MenuItem key={ company.id } value={ company.id }>{ company.name }</MenuItem>
					) ) }
				</Menu>
			</div>
		</MenuContainer>
	);
};

const MenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 4px 4px 4px 10px;

	h1#logo {
		margin: 0;
		font-size: 1.5rem;
		font-weight: normal;
		line-height: 2.5rem;
	}

	.right {
		margin-left: auto;
		order: 2;
	}
`;

export default UserMenu;
