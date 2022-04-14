import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import classnames from 'classnames'
import Footer from '../Footer'
import tw from 'tailwind-styled-components'

const AuthLayout = ({ children }) => {
	return (
		<>
			<Head title="Sign In" />

			<div id="auth">
				<div id="wrapper">
					<main id="content">
						<div className={ classnames('flex', 'items-center', 'justify-center', 'h-full') }>
							<div className={ classnames('tile', 'mb-24') }>
								{ children }
							</div>
						</div>
					</main>

					<Footer />
				</div>
			</div>
		</>
	)
}

export default AuthLayout

const AuthPage = tw.div`
	bg-purple-600
  background-blend-mode: lighten;
  background-image: url("/vite-dev/Images/robots-bw.svg");
`