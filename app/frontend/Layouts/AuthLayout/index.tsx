import React from 'react'
import Footer from '../Footer'
import BackgroundImageUrl from '@/images/robots-bw.svg'
import useAuthStyles from './useAuthStyles'

interface IAuthLayoutProps {
	children: any
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
	const { classes } = useAuthStyles(BackgroundImageUrl)

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
