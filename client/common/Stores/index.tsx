import React, { createContext, useContext } from 'react';
import UserStore from './UserStore';

const user = new UserStore();
const UserContext: React.Context<UserStore> = React.createContext(user);
const useUser = () => useContext(UserContext);

interface DataProviderProps {
	children: any
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
	return (
		<UserContext.Provider value={ user }>
			{ children }
		</UserContext.Provider>
	)
};
export default DataProvider;

export { 
	UserStore, useUser
};