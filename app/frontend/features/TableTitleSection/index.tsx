import { router } from "@inertiajs/react"
import { Box, Title, Group, Divider } from "@mantine/core"
import React from "react"

import { Menu } from "@/components"
import { TrashIcon, type Icon } from "@/components/Icons"
import { useTableContext } from "@/components/Table/TableContext"

import * as classes from "../IndexPageTemplate/IndexPage.css"

export interface IndexTableTitleSectionProps {
	children: React.ReactNode
	title: string
	deleteRoute?: string
	menuOptions?: {
		label: string
		href: string
		icon?: Icon
	}[]
}

const IndexTableTitleSection = ({ children, title, deleteRoute, menuOptions }: IndexTableTitleSectionProps) => {
	const { tableState: { selected } } = useTableContext()

	const deleteRecords = () => {
		if(!deleteRoute) return

		router.visit(deleteRoute, {
			method: "delete",
			data: { ids: Array.from(selected) },
		})
	}

	return (
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

						{ deleteRoute && selected.size > 0 && <>
							<Divider />

							<Menu.Item leftSection={ <TrashIcon size={ 14 } color="red" /> } onClick={ deleteRecords }>
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
	)
}

export default IndexTableTitleSection
