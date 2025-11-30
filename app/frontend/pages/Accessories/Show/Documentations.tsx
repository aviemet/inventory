import React from "react"

import { Table } from "@/components"
import DocumentationTable from "@/pages/Documentation/Table"

import { ShowAccessoryProps } from "."

const Documentations = ({ accessory }: ShowAccessoryProps) => {
	return (
		<Table.TableProvider
			selectable
			rows={ accessory?.documentations ?? [] }
		>
			<Table.SearchInput />

			<DocumentationTable />
		</Table.TableProvider>
	)
}

export default Documentations
