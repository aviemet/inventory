import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Components/Layout'
import { NewIcon, SettingsIcon } from '@/Components/Icons'
import PeopleTable from '../Table'

interface IPeopleIndexProps {
	people: Schema.Person[]
	pagination: Schema.Pagination
}

const PeopleIndex = ({ people, pagination }: IPeopleIndexProps) => {
	const title = 'People'

	return (
		<Page title={ title }>
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
					</TableTitleSection>

					<PeopleTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default PeopleIndex
