import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import ComponentsTable from '../Table'

interface IComponentsIndexProps {
	components: Schema.Item[]
	pagination: Schema.Pagination
}

const ComponentsIndex = ({ components, pagination }: IComponentsIndexProps) => {
	const title = 'Components'

	return (
		<Page title={ title }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="components"
					rows={ components }
					pagination={ pagination }
				>

					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Component', href: Routes.newComponent(), icon: NewIcon },
					] }>
						<Table.SearchInput />
					</TableTitleSection>

					<ComponentsTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default ComponentsIndex
