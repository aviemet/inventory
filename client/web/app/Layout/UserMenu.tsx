import React, { useState, useRef, useLayoutEffect } from 'react'
import { useUser } from '@repo/common/Stores';
import { Select, MenuItem, Button, Menu, Fab } from '@material-ui/core';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserMenu = observer(() => {
	const [ menuAnchor, setMenuAnchor ] = useState();

	const user = useUser();

	if(!user.isLoggedIn) return <></>

	console.log({ active: user.activeCompany });

	const handleCompanySelect = companyId => e => {
		user.activeCompany = companyId;
		console.log({ target: e.target, ct: e.currentTarget });
		// TODO: Persist activeCompany to DB
	};

	const openMenu = e => {
		setMenuAnchor(e.currentTarget);
	};

	const closeMenu = () => {
		setMenuAnchor(null);
	}

	const bannerTitle = user.getActiveCompany ? user.getActiveCompany.name : 'IT Asset Management';

	return (
		<MenuContainer>
			<h1 id='logo'>{ bannerTitle }</h1>
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
					onClick={ closeMenu }
					anchorOrigin={ { 
						vertical: 'bottom',
						horizontal: 'right'
					} }
				>
					{ user.companies.map(({ company }) => (
						<MenuItem 
							key={ company.id } 
							onClick={ handleCompanySelect(company.id) }
						>{ company.name }</MenuItem>
					) ) }
					<MenuItem><Link to='/settings/user'>User Account</Link></MenuItem>
				</Menu>
			</div>
		</MenuContainer>
	);
});

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
