import { Portal, Table } from "@/components"
import DocumentationTable, { documentationColumns } from "@/domains/Documentation/Table"
import { type PaginatedModel } from "@/types/PaginatedModel"

interface ItemDocumentationProps {
	item: Schema.ItemsShow
	documentations?: PaginatedModel<Schema.DocumentationsIndex[]>
}

const Documentations = ({ item, documentations }: ItemDocumentationProps) => {
	const model = "documentations"
	const records = documentations?.data ?? item?.documentations ?? []
	const pagination = documentations?.pagination

	return (
		<Table.TableProvider
			model={ model }
			records={ records }
			columns={ documentationColumns?.map(col => ({
				accessor: String(col.accessor),
				title: col.title ? String(col.title) : "",
			})) ?? [] }
			pagination={ pagination }
		>
			<Portal target="#item-documentations-search-portal">
				<Table.SearchInput model={ model } />
			</Portal>

			<Table.Section>
				<DocumentationTable
					records={ records }
					pagination={ pagination }
					model={ pagination ? model : undefined }
				/>
			</Table.Section>
		</Table.TableProvider>
	)
}

export default Documentations
