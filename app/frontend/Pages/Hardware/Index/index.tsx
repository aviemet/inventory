import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import HardwareTable from '../Table'

interface IHardwaresIndexProps {
	hardwares: Schema.Hardware[]
	pagination: Schema.Pagination
}

const HardwaresIndex = ({ hardwares, pagination }: IHardwaresIndexProps) => {
	const title = 'Hardware Assets'

	return (
		<Page title={ title }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="hardwares"
					rows={ hardwares }
					pagination={ pagination }
				>
					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Asset', href: Routes.newHardware(), icon: NewIcon },
					] }>
						<Table.SearchInput />
					</TableTitleSection>

					<HardwareTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default HardwaresIndex
