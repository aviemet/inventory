import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import ContractsTable from '../Table'

interface IContractsIndexProps {
	contracts: Schema.Contract[]
	pagination: Schema.Pagination
}

const ContractsIndex = ({ contracts, pagination }: IContractsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Contracts"
			model="contracts"
			rows={ contracts }
			pagination={ pagination }
			deleteRoute={ Routes.contracts() }
			menuOptions={ [
				{ label: 'New Contract', href: Routes.newContract(), icon: NewIcon },
			] }
		>
			<ContractsTable />
		</IndexPageTemplate>
	)
}

export default ContractsIndex
