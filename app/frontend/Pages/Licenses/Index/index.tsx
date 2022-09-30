import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Table } from '@/Components'
import { TableTitleSection } from '@/Layouts/Components'
import { NewIcon } from '@/Components/Icons'
import LicensesTable from '../Table'

interface ILicensesIndexProps {
	licenses: Schema.License[]
	pagination: Schema.Pagination
}

const LicencesIndex = ({ licenses, pagination }: ILicensesIndexProps ) => {
	const title = 'Licenses'

	return (
		<>
			<Head title={ title }></Head>

			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="licenses"
					rows={ licenses }
					pagination={ pagination }
				>

					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New License', href: Routes.newLicense(), icon: NewIcon },
					] }>
						<Table.SearchInput />
						<Table.ColumnPicker />
					</TableTitleSection>

					<LicensesTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</>
	)
}

export default LicencesIndex
