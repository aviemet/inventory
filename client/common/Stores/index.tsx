import React from 'react';
import UserStore from './UserStore';
import UserProvider, { useUser } from './UserProvider';

interface DataProviderProps {
	children: any
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
	return (
		<UserProvider>
			{ children }
		</UserProvider>
	)
};

export default DataProvider;

export { 
	UserStore, useUser
};