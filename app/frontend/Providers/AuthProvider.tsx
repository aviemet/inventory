import React from 'react'
import { createContext } from '@/Components/Hooks'

interface IAuthProvider {
	auth: IAuthContext
}

interface IAuthContext {
	form_authenticity_token: string
	user: Schema.User
}

const [useAuth, AuthContextProvider] = createContext<IAuthContext>()
export { useAuth }

const AuthProvider: React.FC<IAuthProvider> = ({ children, auth }) => {

	return (
		<AuthContextProvider value={ auth }>
			{ children }
		</AuthContextProvider>
	)
}

export default AuthProvider
