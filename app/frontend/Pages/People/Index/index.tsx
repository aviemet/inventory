import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Table } from '@/Components'
import { TableTitleSection } from '@/Layouts/Components'
import { NewIcon, SettingsIcon } from '@/Components/Icons'
import PeopleTable from '../Table'

interface IPeopleIndexProps {
	people: Schema.Person[]
	pagination: Schema.Pagination
}

const PeopleIndex = ({ people, pagination }: IPeopleIndexProps) => {
	const title = 'People'

	return (
		<>
			<Head title={ title }></Head>

			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="people"
					rows={ people }
					pagination={ pagination }
				>

					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Person', href: Routes.newPerson(), icon: NewIcon },
						{ label: 'LDAP Settings', href: Routes.settings(), icon: SettingsIcon }
					] }>
						<Table.SearchInput />
						<Table.ColumnPicker />
					</TableTitleSection>

					<PeopleTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</>
	)
}

export default PeopleIndex
