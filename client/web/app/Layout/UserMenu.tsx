import React from 'react'
import { useUser } from '@repo/common/Stores';

const UserMenu = () => {
	const user = useUser();

	if(!user.user) return <></>

	return (
		<div>
			{ user.user.email }		
		</div>
	);
};

export default UserMenu;
