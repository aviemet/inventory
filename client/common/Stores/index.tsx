import React, { createContext, useContext } from 'react';
import UserStore from './UserStore';

const users = new UserStore();
const UserContext: React.Context<UserStore> = React.createContext(users);
const useUsers = () => useContext(UserContext);

interface DataProviderProps {
	children: any
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
	return (
		<UserContext.Provider value={ users }>
			{ children }
		</UserContext.Provider>
	)
};
export default DataProvider;

export { 
	UserStore, useUsers

};