import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const CategoriesTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="type" sort="categorizable_type">Type</Table.HeadCell>
					<Table.HeadCell columnId="qty">Qty</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (category: Schema.CategoriesIndex) => (
					<Table.Row key={ category.id }>
						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.category(category.slug) }>{ category.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="type" nowrap>
							{ category.categorizable_type }
						</Table.Cell>

						<Table.Cell columnId="qty" nowrap>
							{ category.qty }
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editCategory(category.slug) } label={ category.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default CategoriesTable
