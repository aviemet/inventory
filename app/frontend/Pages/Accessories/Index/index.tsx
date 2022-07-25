import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Table } from '@/Components'
import { Routes } from '@/lib'
import { NewIcon } from '@/Components/Icons'
import AccessoriesTable from '../Table'

interface IAccessoriesIndexProps {
	accessories: Schema.Accessory[]
	pagination: Schema.Pagination
}

const AccessoriesIndex = ({ accessories, pagination }: IAccessoriesIndexProps) => {
	const title = 'Accessories'

	return (
		<>
			<Head title={ title }></Head>

			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="accessories"
					rows={ accessories }
					pagination={ pagination }
				>

					<Table.Title
						title={ title }
						menuOptions={ [
							{ label: 'Create New Accessory', href: Routes.newAccessory(), icon: NewIcon },
						] }
					/>

					<AccessoriesTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</>
	)
}

export default AccessoriesIndex
