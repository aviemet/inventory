import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Footer from '../Footer'
import tw, { styled } from 'twin.macro'

const AuthLayout = ({ children }) => {
	return (
		<>
			<Head title="Sign In" />

			<AuthPage id="auth" tw="bg-purple-600 min-h-screen">
				<AuthWrapper tw="grid gap-0 min-h-screen w-full">
					<main id="content" className="h-full">
						<div className="flex items-center justify-center h-full">
							{ children }
						</div>
					</main>

					<Footer />
				</AuthWrapper>
			</AuthPage>
		</>
	)
}

export default AuthLayout

const AuthPage = styled.div`
	background-blend-mode: lighten;
  background-image: url("./Images/robots-bw.svg");
`

const AuthWrapper = styled.div`
	grid-template-rows: 1fr 35px;
	grid-template-areas:
		"content"
		"footer";

	#content {
		grid-area: content;
	}
	#footer {
		grid-area: footer;
	}
`