import React from 'react'
import SearchInput from '@/Components/Table/SearchInput'
import { useTableContext } from './TableContext'
import { Menu, Box, Title, Group, Divider } from '@mantine/core'
import { Link } from '@/Components'
import { TrashIcon } from '@/Components/Icons'
import { Inertia, Method } from '@inertiajs/inertia'
import { Routes } from '@/lib'

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

	const deleteRecords = () => {
		Inertia.visit(Routes.vendors(), {
			method: Method.DELETE,
			data: { ids: Array.from(selected) },
		})
	}

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
				<Menu position="bottom-end">
					<Menu.Target />

					<Menu.Dropdown>
						{ menuOptions && menuOptions.map(({ label, href, icon }, index) => {
							const Icon = icon
							return (
								<Menu.Item key={ index } href={ href } icon={ icon && <Icon size={ 14 } /> }>
									{ label }
								</Menu.Item>
							)
						}) }

						{ selected.size > 0 && <>
							<Divider />

							<Menu.Item icon={ <TrashIcon size={ 14 } /> } onClick={ deleteRecords }>
							Delete
							</Menu.Item>
						</> }

					</Menu.Dropdown>
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
