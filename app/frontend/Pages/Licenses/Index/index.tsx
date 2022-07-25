import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Table } from '@/Components'
import { NewIcon } from '@/Components/Icons'
import AccessoriesTable from '../Table'

interface ILicensesIndexProps {
	licenses: Schema.License[]
	pagination: Schema.Pagination
}

const Index = ({ licenses, pagination }: ILicensesIndexProps ) => {
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

					<Table.Title
						title={ title }
						menuOptions={ [
							{ label: 'New License', href: Routes.newLicense(), icon: NewIcon },
						] }
					/>

					<AccessoriesTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</>
	)
}

export default Index
