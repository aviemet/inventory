
import { Table } from "@/components"
import DocumentationTable from "@/domains/Documentation/Table"

interface ItemDocumentationProps {
	item: Schema.ItemsShow
}

const Documentations = ({ item }: ItemDocumentationProps) => {
	return (
		<Table.TableProvider
			selectable
			rows={ item?.documentations ?? [] }
		>
			<Table.SearchInput />

			<DocumentationTable />

		</Table.TableProvider>
	)
}

export default Documentations
