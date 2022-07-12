import React from 'react'
import SearchInput from '@/Components/Table/SearchInput'
import { useTableContext } from './TableContext'
import { Menu, Box, Title, Group, Divider } from '@mantine/core'
import { Link } from '@/Components'
import { TrashIcon } from '@/Components/Icons'

// TODO: Figure out correct type for icon
interface ITableTitleSectionProps {
	title: string
	menuOptions?: {
		label: string
		href: string
		icon?: any
	}[]
}

const TableTitleSection = ({ title, menuOptions }: ITableTitleSectionProps) => {
	const { tableState: { hideable, model, selected } } = useTableContext()

	return (
		<Group position="apart" align="start" sx={ { marginBottom: 12 } } spacing="sm">
			<Group position="apart" sx={ theme => ({
				flex: '1 1 100%',
				width: '100%',

				[`@media (min-width: ${theme.breakpoints.sm}px)`]: {
					flex: 1,
					width: 'auto',
				},

				[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
					'&&': {
						marginBottom: 0,
					},
				},

				h1: {
					marginBottom: 0
				}
			}) }>
				<Title>
					{ title }
				</Title>
				<Menu position="bottom" placement="start">
					{ menuOptions && menuOptions.map(({ label, href, icon }, index) => {
						const Icon = icon
						return (
							<Link key={ index } href={ href }>
								<Menu.Item icon={ icon && <Icon size={ 14 } /> }>
									{ label }
								</Menu.Item>
							</Link>
						)
					}) }

					{ selected.size > 0 && <>
						<Divider />

						<Menu.Item icon={ <TrashIcon size={ 14 } /> }>
							Delete
						</Menu.Item>
					</> }

				</Menu>
			</Group>
			<Box sx={ theme=> ({
				flex: '1 1 100%',
				display: 'flex',

				[`@media (min-width: ${theme.breakpoints.sm}px)`]: {
					flex: 1,
					width: 'auto',
				},
			}) }>
				<SearchInput model={ model } columnPicker={ hideable } />
			</Box>
		</Group>
	)
}

export default TableTitleSection
