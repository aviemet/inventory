import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const ModelsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="model_number" sort="model_number">Model #</Table.HeadCell>
					<Table.HeadCell columnId="category" sort="category.name">Category</Table.HeadCell>
					<Table.HeadCell columnId="manufacturer" sort="manufacturer.name">Manufacturer</Table.HeadCell>
					<Table.HeadCell columnId="count" sort="count">#</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (model: Schema.ModelsIndex) => (
					<Table.Row key={ model.id }>
						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.model(model.slug) }>{ model.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="model_number" nowrap>
							<Link href={ Routes.model(model.slug) }>{ model.model_number }</Link>
						</Table.Cell>

						<Table.Cell columnId="category">
							{ model.category && <Link href={ Routes.category(model.category.slug) }>
								{ model.category.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="manufacturer">
							{ model.manufacturer && <Link href={ Routes.manufacturer(model.manufacturer.slug) }>
								{ model.manufacturer.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="count">
							{ model?.count && model.count }
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editModel(model.slug) } label={ model.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ModelsTable
