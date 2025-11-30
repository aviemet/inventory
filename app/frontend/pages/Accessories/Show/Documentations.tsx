
import { Table } from "@/components"
import DocumentationTable from "@/domains/Documentation/Table"

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
