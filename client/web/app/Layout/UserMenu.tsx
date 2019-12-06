import React from 'react'
import { useUser } from '@repo/common/Stores';
import { Select, MenuItem } from '@material-ui/core';
import { observer } from 'mobx-react';

const UserMenu = () => {
	const user = useUser();

	const handleCompanySelect = e => {
		user.activeCompany = e.target.value;
	};

	if(!user.isLoggedIn) return <></>

	return (
		<div>
			<Select
				labelId='companies'
				id='companies'
				value={ user.activeCompany }
				onChange={ handleCompanySelect }
			>
				{ user.companies.map(({ company }) => (
					<MenuItem key={ company.id } value={ company.id }>{ company.name }</MenuItem>
				) ) }
			</Select>
			{ user.email }
		</div>
	);
};

export default UserMenu;
