import React from 'react'
import { Section } from '@/Components'
import SearchInput from '@/Components/Table/SearchInput'
import { useTableContext } from './TableContext'
import { Menu, Box, Title, Group, Divider } from '@mantine/core'
import { Link } from '@/Components'
import { NewIcon, TrashIcon } from '@/Components/Icons'

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
	newLabel: string
	newLink: string
}

export const TableTitleSection = ({ title, newLabel, newLink }: ITableTitleSectionProps) => {
	const { tableState: { hideable, model, selected } } = useTableContext()

	return (
		<Group position="apart" align="start">
			<Title sx={ { flex: 2 } }>
				<Menu position="bottom" placement="start">
					<Link href={ newLink }>
						<Menu.Item icon={ <NewIcon size={ 14 } /> }>
							{ newLabel }
						</Menu.Item>
					</Link>

					{ selected.size > 0 && <>
						<Divider />

						<Menu.Item icon={ <TrashIcon size={ 14 } /> }>
							Delete
						</Menu.Item>
					</> }

				</Menu>
				{ title }
			</Title>
			<Box sx={ { flex: 1, display: 'flex' } }>
				<SearchInput model={ model } columnPicker={ hideable } />
			</Box>
		</Group>
	)
}
