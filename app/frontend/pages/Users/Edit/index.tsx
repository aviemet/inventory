
import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import UserForm from "@/domains/Users/Form"

interface UpdateUserProps {
	user: Schema.UsersEdit
}

const EditUser = ({ user }: UpdateUserProps) => {
	const title = "Edit User"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Users", href: Routes.tickets() },
			{ title: user.email, href: Routes.user(user) },
			{ title: "Edit User", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<UserForm
					to={ Routes.user(user) }
					method="patch"
					user={ user }
				/>
			</Section>
		</Page>
	)
}

export default EditUser
