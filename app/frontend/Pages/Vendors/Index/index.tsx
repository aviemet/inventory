import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import VendorsTable from '../Table'

interface IVendorsIndexProps {
	vendors: Schema.Vendor[]
	pagination: Schema.Pagination
}

const VendorsIndex = ({ vendors, pagination }: IVendorsIndexProps) => {
	const title = 'Vendors'

	return (
		<Page title={ title }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="vendors"
					rows={ vendors }
					pagination={ pagination }
				>
					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Vendor', href: Routes.newVendor(), icon: NewIcon },
					] }>
						<Table.SearchInput />
					</TableTitleSection>

					<VendorsTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default VendorsIndex
