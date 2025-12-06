import { router } from "@inertiajs/react"
import { Box, Title, Group, Divider } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import React from "react"

import { Menu } from "@/components"
import { TrashIcon, type Icon } from "@/components/Icons"

import DeleteConfirmationModal from "./DeleteConfirmationModal"
import * as classes from "../IndexPageTemplate/IndexPage.css"

export interface IndexTableTitleSectionProps {
	children: React.ReactNode
	title: string
	deleteRoute?: string
	selectedRecords?: readonly { id: string }[]
	menuOptions?: {
		label: string
		href: string
		icon?: Icon
	}[]
}

const IndexTableTitleSection = ({ children, title, deleteRoute, selectedRecords = [], menuOptions }: IndexTableTitleSectionProps) => {
	const [opened, { open, close }] = useDisclosure(false)

	const selectedIds = React.useMemo(() => {
		return selectedRecords.map(record => record.id).filter((id): id is string => id !== null && id !== undefined)
	}, [selectedRecords])

	const handleDeleteClick = () => {
		if(selectedIds.length > 0) {
			open()
		}
	}

	const confirmDelete = () => {
		if(!deleteRoute) return

		const ids = selectedIds
		const url = new URL(deleteRoute, window.location.origin)
		ids.forEach(id => {
			url.searchParams.append("ids[]", String(id))
		})

		router.visit(url.pathname + url.search, {
			method: "delete",
		})

		close()
	}

	return (
		<>
			<DeleteConfirmationModal
				opened={ opened }
				onClose={ close }
				onConfirm={ confirmDelete }
				selectedRecords={ selectedRecords }
			/>

			<Group justify="space-between" align="start" style={ { marginBottom: 12 } } gap="sm">
				<Group justify="space-between" className={ classes.title }>
					<Title>
						{ title }
					</Title>
					<Menu position="bottom-end">
						<Menu.Target />

						<Menu.Dropdown>
							{ menuOptions && menuOptions.map(({ label, href, icon }, index) => {
								return (
									<Menu.Link key={ index } href={ href } leftSection={ icon ? icon : undefined }>
										{ label }
									</Menu.Link>
								)
							}) }

							{ deleteRoute && selectedIds.length > 0 && <>
								<Divider />

								<Menu.Item leftSection={ <TrashIcon size={ 14 } color="red" /> } onClick={ handleDeleteClick }>
									Delete
								</Menu.Item>
							</> }

						</Menu.Dropdown>
					</Menu>
				</Group>
				{ !!children && <Box className={ classes.content }>
					{ children }
				</Box> }
			</Group>
		</>
	)
}

export default IndexTableTitleSection
