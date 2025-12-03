import { Title, Page, Section } from "@/components"
import ContractForm from "@/domains/Contracts/Form"
import { Routes } from "@/lib"


interface NewContractProps {
	contract: Schema.ContractsFormData
}

const NewContract = ({ contract }: NewContractProps) => {
	const title = "New Contract"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Contracts", href: Routes.contracts() },
			{ title: "New Contract", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<ContractForm to={ Routes.contracts() } contract={ contract } />
			</Section>
		</Page>
	)
}

export default NewContract
