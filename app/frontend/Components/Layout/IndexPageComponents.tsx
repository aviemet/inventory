import React from 'react'
import 'twin.macro'
import { SearchInput } from '@/Components/Table'
import { useTableContext } from '../Table/TableContext'

export const TableSection = ({ children }: { children: React.ReactNode }) => (
	<section tw="flex flex-col h-full">
		{ children }
	</section>
)

interface ITableTitleSectionProps {
	title: string
	popover: React.ReactNode
}

export const TableTitleSection = ({ title, popover }: ITableTitleSectionProps) => {
	const { tableState: { hideable, model } } = useTableContext()

	return (
		<div tw="flex items-center justify-between">
			<h1 tw="md:inline-block md:flex-1 md:align-middle align-text-top">{ title }</h1>
			<div tw="md:flex-1 flex">
				<SearchInput model={ model } columnPicker={ hideable } />

				<div tw="inline-block w-10 p-1">
					{ popover }
				</div>

			</div>
		</div>
	)
}
