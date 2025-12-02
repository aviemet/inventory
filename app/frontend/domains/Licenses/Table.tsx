import { createColumnHelper } from "@tanstack/react-table"

import { Group, Link, Money, Table } from "@/components"
import { CheckoutButton, EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes, formatter } from "@/lib"

const columnHelper = createColumnHelper<Schema.LicensesIndex>()

export const licensesColumns = [
	columnHelper.accessor("name", {
		header: "Name",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: false,
		},
	}),
	columnHelper.accessor("qty", {
		header: "Seats",
		enableSorting: true,
		meta: {
			model: "qty",
			hideable: "qty",
		},
	}),
	columnHelper.accessor("licenser_name", {
		header: "Licensed To Name",
		enableSorting: true,
		meta: {
			model: "licenser_name",
			hideable: "licenser_name",
		},
	}),
	columnHelper.accessor("licenser_email", {
		header: "Licensed To Email",
		enableSorting: true,
		meta: {
			model: "licenser_email",
			hideable: "licenser_email",
		},
	}),
	columnHelper.accessor("reassignable", {
		header: "Reassignable",
		enableSorting: true,
		meta: {
			model: "reassignable",
			hideable: "reassignable",
		},
	}),
	columnHelper.accessor("cost", {
		header: "Cost",
		enableSorting: true,
		meta: {
			model: "cost_cents",
			hideable: "cost",
		},
	}),
	columnHelper.accessor("purchased_at", {
		header: "Purchase Date",
		enableSorting: true,
		meta: {
			model: "purchased_at",
			hideable: "purchased_at",
		},
	}),
	columnHelper.accessor("expires_at", {
		header: "Expire Date",
		enableSorting: true,
		meta: {
			model: "expires_at",
			hideable: "expires_at",
		},
	}),
	columnHelper.accessor("terminates_at", {
		header: "Termination Date",
		enableSorting: true,
		meta: {
			model: "terminates_at",
			hideable: "terminates_at",
		},
	}),
	columnHelper.accessor("maintained", {
		header: "Maintained",
		enableSorting: true,
		meta: {
			model: "maintained",
			hideable: "maintained",
		},
	}),
	columnHelper.accessor(row => row.category?.name, {
		id: "category",
		header: "Category",
		enableSorting: true,
		meta: {
			model: "category.name",
			hideable: "category",
		},
	}),
	columnHelper.accessor(row => row.vendor?.name, {
		id: "vendor",
		header: "Vendor",
		enableSorting: true,
		meta: {
			model: "vendors.name",
			hideable: "vendor",
		},
	}),
	columnHelper.accessor(row => row.manufacturer?.name, {
		id: "manufacturer",
		header: "Manufacturer",
		enableSorting: true,
		meta: {
			model: "manufacturers.name",
			hideable: "manufacturer",
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

const LicensesTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="qty" />
					<Table.HeadCell columnId="licenser_name" />
					<Table.HeadCell columnId="licenser_email" />
					<Table.HeadCell columnId="reassignable" />
					<Table.HeadCell columnId="cost" />
					<Table.HeadCell columnId="purchased_at" />
					<Table.HeadCell columnId="expires_at" />
					<Table.HeadCell columnId="terminates_at" />
					<Table.HeadCell columnId="maintained" />
					<Table.HeadCell columnId="category" />
					<Table.HeadCell columnId="vendor" />
					<Table.HeadCell columnId="manufacturer" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (license: Schema.LicensesIndex) => (
					<Table.Row key={ license.id }>

						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.license(license) }>{ license.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="qty">
							<Link href={ Routes.license(license) }>{ license.qty }</Link>
						</Table.Cell>

						<Table.Cell columnId="licenser_name">
							<Link href={ Routes.license(license) }>{ license.licenser_name }</Link>
						</Table.Cell>

						<Table.Cell columnId="licenser_email">
							<Link href={ Routes.license(license) }>{ license.licenser_email }</Link>
						</Table.Cell>

						<Table.Cell columnId="reassignable">
							<Link href={ Routes.license(license) }>{ license.reassignable }</Link>
						</Table.Cell>

						<Table.Cell columnId="cost">
							<Money>{ license.cost }</Money>
						</Table.Cell>

						<Table.Cell columnId="purchased_at">{ license.purchased_at && formatter.date.short(license.purchased_at) }</Table.Cell>

						<Table.Cell columnId="expires_at">{ license.expires_at && formatter.date.short(license.expires_at) }</Table.Cell>

						<Table.Cell columnId="terminates_at">{ license.terminates_at && formatter.date.short(license.terminates_at) }</Table.Cell>

						<Table.Cell columnId="maintained">{ license.maintained }</Table.Cell>

						<Table.Cell columnId="category">
							<Link href={ Routes.license(license) }>{ license.category?.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="vendor">
							<Link href={ Routes.license(license) }>{ license.vendor?.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="manufacturer">
							<Link href={ Routes.license(license) }>{ license.manufacturer?.name }</Link>
						</Table.Cell>


						<Table.Cell columnId="actions" fitContent>
							<Group wrap="nowrap" gap="sm">
								{ license.qty_available && <CheckoutButton
									href={ Routes.checkoutLicense(license) }
									disabled={ license.qty_available < 1 }
									tooltipMessage={ license.qty_available < 1 && "There are none to checkout" }
									label={ license.name }
								/> }
								<EditButton href={ Routes.editLicense(license) } />
							</Group>
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default LicensesTable
