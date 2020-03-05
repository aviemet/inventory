import React, { createContext, useContext, useEffect } from 'react';
import UserStore from './UserStore';
import { observer } from 'mobx-react';

const user = new UserStore();
const UserContext: React.Context<UserStore> = createContext(user);
const useUser = () => useContext(UserContext);

interface UserProviderProps {
	children: any
}

const UserProvider: React.FC<UserProviderProps> = observer(({ children }) => {
	return (
		<UserContext.Provider value={ user }>
			{ children }
		</UserContext.Provider>
	)
});

export default UserProvider;

export { UserStore, useUser };