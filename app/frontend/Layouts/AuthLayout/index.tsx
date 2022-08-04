import React from 'react'
import Footer from '../Footer'
import { createStyles } from '@mantine/core'
import BackgroundImageUrl from '@/Images/robots-bw.svg?url'

const useAuthStyles = createStyles(theme => ({
	page: {
		backgroundBlendMode: theme.other.colorSchemeOption('lighten', 'soft-light'), // 'soft-light' 'multiply'
		backgroundImage: `url("${BackgroundImageUrl}")`,
		backgroundColor: theme.colors[theme.primaryColor][6],
		minHeight: '100vh',
	},

	wrapper: {
		minHeight: '100vh',
		width: '100%',
		display: 'grid',
		gap: '0px',
		gridTemplateRows: '1fr 35px',
		gridTemplateAreas: '"content" "footer"',

		'#content': {
			gridArea: 'content',
			height: '100%',
		},
		'#footer': {
			gridArea: 'footer',
		},
	},

	content: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
}))

interface IAuthLayoutProps {
	children: React.ReactNode
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
	const { classes } = useAuthStyles()

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
