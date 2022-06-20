import React from 'react'
import { Section } from '@/Components'
import 'twin.macro'
import { SearchInput } from '@/Components/Table'
import { useTableContext } from '../Table/TableContext'
import { Box, Title } from '@mantine/core'

export const TableSection = ({ children }: { children: React.ReactNode }) => (
	<Section fullHeight={ true } sx={ {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	} }>
		{ children }
	</Section>
)

interface ITableTitleSectionProps {
	title: string
	popover: React.ReactNode
}

export const TableTitleSection = ({ title, popover }: ITableTitleSectionProps) => {
	const { tableState: { hideable, model } } = useTableContext()

	return (
		<Box sx={ {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between'
		} }>
			<Title sx={ { flex: 2 } }>{ title }</Title>
			<Box sx={ { flex: 1, display: 'flex' } }>
				<SearchInput model={ model } columnPicker={ hideable } />

				<Box sx={ { display: 'inline-block', width: 48, padding: 1 } } tw="inline-block w-10 p-1">
					{ popover }
				</Box>

			</Box>
		</Box>
	)
}
