import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import DepartmentsTable from '../Table'

interface IDepartmentsIndexProps {
	departments: Schema.DepartmentWithCounts[]
	pagination: Schema.Pagination
}

const DepartmentsIndex = ({ departments, pagination }: IDepartmentsIndexProps) => {
	const title = 'Departments'

	return (
		<Page title={ title }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="departments"
					rows={ departments }
					pagination={ pagination }
				>

					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Department', href: Routes.newDepartment(), icon: NewIcon },
					] }>
						<Table.SearchInput />
					</TableTitleSection>

					<DepartmentsTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default DepartmentsIndex
