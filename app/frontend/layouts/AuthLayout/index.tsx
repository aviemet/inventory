import { AppShell } from "@mantine/core"

import { LayoutProps } from ".."
import Footer from "../Footer"
import * as classes from "./Auth.css"

const AuthLayout = ({ children }: LayoutProps) => {
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
