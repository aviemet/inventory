import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import ContractsTable from '../Table'

interface IContractsIndexProps {
	contracts: Schema.Contract[]
	pagination: Schema.Pagination
}

const ContractsIndex = ({ contracts, pagination }: IContractsIndexProps) => {
	const title = 'Contracts'

	return (
		<Page title={ title }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="contracts"
					rows={ contracts }
					pagination={ pagination }
				>
					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Contract', href: Routes.newContract(), icon: NewIcon },
					] }>
						<Table.SearchInput />
					</TableTitleSection>

					<ContractsTable />

					<Table.Pagination />

				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default ContractsIndex
