import { NewIcon, SettingsIcon } from "@/components/Icons"
import PeopleTable from "@/domains/People/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface PeopleIndexProps {
	people: Schema.PeopleIndex[]
	pagination: Schema.Pagination
}

const PeopleIndex = ({ people, pagination }: PeopleIndexProps) => {
	return (
		<IndexPageTemplate
			title="People"
			model="people"
			pagination={ pagination }
			deleteRoute={ Routes.people() }
			menuOptions={ [
				{ label: "New Person", href: Routes.newPerson(), icon: <NewIcon /> },
				// { label: 'LDAP Settings', href: Routes.settings(), icon: SettingsIcon },
			] }
		>
			<PeopleTable records={ people } pagination={ pagination } model="people" />
		</IndexPageTemplate>
	)
}

export default PeopleIndex
