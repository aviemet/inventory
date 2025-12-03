import { NewIcon } from "@/components/Icons"
import UsersTable, { usersColumns } from "@/domains/Users/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface UserIndexProps {
	users: Schema.UsersIndex[]
	pagination: Schema.Pagination
}

const UserIndex = ({ users, pagination }: UserIndexProps) => {
	return (
		<IndexPageTemplate
			title="Users"
			model="users"
			rows={ users }
			columns={ usersColumns }
			pagination={ pagination }
			deleteRoute={ Routes.users() }
			menuOptions={ [
				{ label: "Invite New User", href: Routes.newUser(), icon: <NewIcon /> },
			] }
		>
			<UsersTable records={ users } pagination={ pagination } model="users" />
		</IndexPageTemplate>
	)
}

export default UserIndex
