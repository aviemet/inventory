import React from 'react'
import { useTableContext } from '@/Components/Table/TableContext'
import { Box, Title, Group, Divider } from '@mantine/core'
import { Menu } from '@/Components'
import { TrashIcon } from '@/Components/Icons'
import { router } from '@inertiajs/react'
import { Routes } from '@/lib'

// TODO: Figure out correct type for icon
interface IIndexTableTitleSectionProps {
	children: React.ReactNode
	title: string
	menuOptions?: {
		label: string
		href: string
		icon?: any
	}[]
}

const IndexTableTitleSection = ({ children, title, menuOptions }: IIndexTableTitleSectionProps) => {
	const { tableState: { selected } } = useTableContext()

	const deleteRecords = () => {
		router.visit(Routes.vendors(), {
			method: 'delete',
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
					marginBottom: 0,
				},
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
								<Menu.Link key={ index } href={ href } icon={ icon && <Icon size={ 14 } /> }>
									{ label }
								</Menu.Link>
							)
						}) }

						{ selected.size > 0 && <>
							<Divider />

							<Menu.Item icon={ <TrashIcon size={ 14 } color='red' /> } onClick={ deleteRecords }>
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
				{ children }
			</Box>
		</Group>
	)
}

export default IndexTableTitleSection
