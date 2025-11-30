import { AppShell } from "@mantine/core"
import React from "react"

import Footer from "../Footer"
import * as classes from "./Auth.css"

interface AuthLayoutProps {
	children: any
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<AppShell>
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
		</AppShell>
	)
}

export default AuthLayout
