import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Table } from '@/Components'
import { TableTitleSection } from '@/Layouts/Components'
import { NewIcon } from '@/Components/Icons'
import DepartmentsTable from '../Table'

export interface DepartmentWithCounts extends Schema.Department {
	counts: {
		items: number
		accessories: number
		consumables: number
		components: number
		departments: number
		licenses: number
		people: number
	}
}

interface IDepartmentsIndexProps {
	departments: DepartmentWithCounts[]
	pagination: Schema.Pagination
}

const DepartmentsIndex = ({ departments, pagination }: IDepartmentsIndexProps) => {
	const title = 'Departments'

	return (
		<>
			<Head title={ title }></Head>

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
						<Table.ColumnPicker />
					</TableTitleSection>

					<DepartmentsTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</>
	)
}

export default DepartmentsIndex
