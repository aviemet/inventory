import { NewIcon } from "@/components/Icons"
import LicensesTable, { licensesColumns } from "@/domains/Licenses/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface LicensesIndexProps {
	licenses: Schema.LicensesIndex[]
	pagination: Schema.Pagination
}

const LicensesIndex = ({ licenses, pagination }: LicensesIndexProps ) => {
	return (
		<IndexPageTemplate
			title="Licenses"
			model="licenses"
			rows={ licenses }
			columns={ licensesColumns }
			pagination={ pagination }
			deleteRoute={ Routes.licenses() }
			menuOptions={ [
				{ label: "New License", href: Routes.newLicense(), icon: <NewIcon /> },
			] }
		>
			<LicensesTable records={ licenses } pagination={ pagination } model="licenses" />
		</IndexPageTemplate>
	)
}

export default LicensesIndex
