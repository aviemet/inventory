import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import CompaniesTable from '../Table'

interface ICompaniesIndexProps {
	companies: Schema.CompanyWithCounts[]
	pagination: Schema.Pagination
}

const CompaniesIndex = ({ companies, pagination }: ICompaniesIndexProps) => {
	const title = 'Companies'

	return (
		<Page title={ title }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="companies"
					rows={ companies }
					pagination={ pagination }
				>

					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Company', href: Routes.newCompany(), icon: NewIcon },
					] }>
						<Table.SearchInput />
					</TableTitleSection>

					<CompaniesTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default CompaniesIndex
