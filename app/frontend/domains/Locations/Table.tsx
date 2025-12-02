import { createColumnHelper } from "@tanstack/react-table"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.LocationsIndex>()

export const locationsColumns = [
	columnHelper.accessor("name", {
		header: "Name",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: false,
		},
	}),
	columnHelper.accessor(row => row.parent?.name, {
		id: "parent",
		header: "Parent",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: "parent",
		},
	}),
	columnHelper.display({
		id: "items",
		header: "Assets",
		enableSorting: true,
		meta: {
			model: "items",
			hideable: "items",
		},
	}),
	columnHelper.display({
		id: "accessories",
		header: "Accessories",
		enableSorting: true,
		meta: {
			model: "accessories",
			hideable: "accessories",
		},
	}),
	columnHelper.display({
		id: "consumables",
		header: "Consumables",
		enableSorting: true,
		meta: {
			model: "consumables",
			hideable: "consumables",
		},
	}),
	columnHelper.display({
		id: "components",
		header: "Components",
		enableSorting: true,
		meta: {
			model: "components",
			hideable: "components",
		},
	}),
	columnHelper.display({
		id: "licenses",
		header: "Licenses",
		enableSorting: true,
		meta: {
			model: "licenses",
			hideable: "licenses",
		},
	}),
	columnHelper.display({
		id: "people",
		header: "People",
		enableSorting: true,
		meta: {
			model: "people",
			hideable: "people",
		},
	}),
	columnHelper.display({
		id: "actions",
		header: "Actions",
		enableSorting: false,
		meta: {
			hideable: false,
		},
	}),
]

const LocationsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="parent" />
					<Table.HeadCell columnId="items" />
					<Table.HeadCell columnId="accessories" />
					<Table.HeadCell columnId="consumables" />
					<Table.HeadCell columnId="components" />
					<Table.HeadCell columnId="licenses" />
					<Table.HeadCell columnId="people" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (location: Schema.LocationsIndex) => (
					<Table.Row key={ location.id }>
						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.location(location.slug) }>{ location.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="parent">
							{ location.parent && <Link href={ Routes.location(location.parent.slug!) }>{ location!.parent!.name }</Link> }
						</Table.Cell>

						<Table.Cell columnId="items">
							<Link href={ Routes.items() }>{ location!.counts.items }</Link>
						</Table.Cell>

						<Table.Cell columnId="accessories">
							<Link href={ Routes.accessories() }>{ location!.counts.accessories }</Link>
						</Table.Cell>

						<Table.Cell columnId="consumables">
							<Link href={ Routes.consumables() }>{ location!.counts.consumables }</Link>
						</Table.Cell>

						<Table.Cell columnId="components">
							<Link href={ Routes.components() }>{ location!.counts.components }</Link>
						</Table.Cell>

						<Table.Cell columnId="licenses">
							<Link href={ Routes.licenses() }>{ location!.counts.licenses }</Link>
						</Table.Cell>

						<Table.Cell columnId="people">
							<Link href={ Routes.people() }>{ location!.counts.people }</Link>
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editLocation(location.slug) } label={ location.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default LocationsTable
