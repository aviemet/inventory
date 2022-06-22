import React from 'react'
import { Section } from '@/Components'
import { SearchInput } from '@/Components/Table'
import { useTableContext } from '../Table/TableContext'
import { Box, Title, Group } from '@mantine/core'

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
	menu?: React.ReactNode
}

export const TableTitleSection = ({ title, menu }: ITableTitleSectionProps) => {
	const { tableState: { hideable, model } } = useTableContext()

	return (
		<Group position="apart" align="start">
			<Title sx={ { flex: 2 } }>{ title }</Title>
			<Box sx={ { flex: 1 } }>
				<SearchInput model={ model } columnPicker={ hideable } />

				{ menu && menu }
			</Box>
		</Group>
	)
}
