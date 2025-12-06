import React from "react"

import { Table } from "@/components"
import { type Icon } from "@/components/Icons"

import { TableTitleSection } from ".."

interface ShowPageTableTemplate {
	children?: React.ReactNode
	title: string
	model: string
	menuOptions?: {
		label: string
		href: string
		icon?: Icon
	}[]
}

const ShowPageTableTemplate = ({
	children,
	model,
	title,
	menuOptions }
: ShowPageTableTemplate) => {
	return (
		<Table.Section>
			<TableTitleSection title={ title } menuOptions={ menuOptions }>
				<Table.SearchInput model={ model } />
			</TableTitleSection>

			{ children }
		</Table.Section>
	)
}

export default ShowPageTableTemplate
