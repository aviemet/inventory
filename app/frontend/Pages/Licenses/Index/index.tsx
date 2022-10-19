import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import LicensesTable from '../Table'

interface ILicensesIndexProps {
	licenses: Schema.License[]
	pagination: Schema.Pagination
}

const LicencesIndex = ({ licenses, pagination }: ILicensesIndexProps ) => {
	const title = 'Licenses'

	return (
		<Page title={ title }>
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
					</TableTitleSection>

					<LicensesTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default LicencesIndex
