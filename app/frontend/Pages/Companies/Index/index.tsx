import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Table } from '@/Components'
import { TableTitleSection } from '@/Layouts/Components'
import { NewIcon } from '@/Components/Icons'
import CompaniesTable from '../Table'

interface ICompaniesIndexProps {
	companies: Schema.CompanyWithCounts[]
	pagination: Schema.Pagination
}

const CompaniesIndex = ({ companies, pagination }: ICompaniesIndexProps) => {
	const title = 'Companies'

	return (
		<>
			<Head title={ title }></Head>

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
						<Table.ColumnPicker />
					</TableTitleSection>

					<CompaniesTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</>
	)
}

export default CompaniesIndex
