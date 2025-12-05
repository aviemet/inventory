import { NewIcon } from "@/components/Icons"
import ContractsTable from "@/domains/Contracts/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface ContractsIndexProps {
	contracts: Schema.ContractsIndex[]
	pagination: Schema.Pagination
}

const ContractsIndex = ({ contracts, pagination }: ContractsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Contracts"
			model="contracts"
			pagination={ pagination }
			deleteRoute={ Routes.contracts() }
			menuOptions={ [
				{ label: "New Contract", href: Routes.newContract(), icon: <NewIcon /> },
			] }
		>
			<ContractsTable records={ contracts } pagination={ pagination } model="contracts" />
		</IndexPageTemplate>
	)
}

export default ContractsIndex
