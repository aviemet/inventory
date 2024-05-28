import Table from '@/Components/Table'
import React from 'react'
import { TableTitleSection } from '..'

interface ShowPageTableTemplate {
	children: React.ReactNode
	title: string
	model: string
	rows: Record<string, any>[]
	pagination: Schema.Pagination
	menuOptions?: {
		label: string
		href: string
		icon?: any
	}[]
}

const ShowPageTableTemplate = ({ children, model, rows, pagination, title, menuOptions }: ShowPageTableTemplate) => {
	return (
		<Table.TableProvider
			selectable
			hideable
			model={ model }
			rows={ rows }
			pagination={ pagination }
		>
			<TableTitleSection title={ title } menuOptions={ menuOptions }>
				<Table.SearchInput />
			</TableTitleSection>

			{ children }

			<Table.Pagination />
		</Table.TableProvider>
	)
}

export default ShowPageTableTemplate
