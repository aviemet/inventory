import React from 'react'
import Footer from '../Footer'
import * as classes from './Auth.css'

interface IAuthLayoutProps {
	children: any
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
	return (
		<div id="auth" className={ classes.page }>
			<div className={ classes.wrapper }>
				<main id="content">
					<div className={ classes.content }>
						{ children }
					</div>
				</main>
				<Footer />
			</div>
		</div>
	)
}

export default AuthLayout
