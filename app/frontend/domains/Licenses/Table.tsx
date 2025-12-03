import { type DataTableColumn } from "mantine-datatable"

import { Group, Link, Money, Table } from "@/components"
import { CheckoutButton, EditButton } from "@/components/Button"
import { Routes, formatter } from "@/lib"

export const licensesColumns: DataTableColumn<Schema.LicensesIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (license) => <Link href={ Routes.license(license) }>{ license.name }</Link>,
	},
	{
		accessor: "qty",
		title: "Seats",
		sortable: true,
		render: (license) => <Link href={ Routes.license(license) }>{ license.qty }</Link>,
	},
	{
		accessor: "licenser_name",
		title: "Licensed To Name",
		sortable: true,
		render: (license) => <Link href={ Routes.license(license) }>{ license.licenser_name }</Link>,
	},
	{
		accessor: "licenser_email",
		title: "Licensed To Email",
		sortable: true,
		render: (license) => <Link href={ Routes.license(license) }>{ license.licenser_email }</Link>,
	},
	{
		accessor: "reassignable",
		title: "Reassignable",
		sortable: true,
		render: (license) => <Link href={ Routes.license(license) }>{ license.reassignable }</Link>,
	},
	{
		accessor: "cost",
		title: "Cost",
		sortable: true,
		render: (license) => <Money>{ license.cost }</Money>,
	},
	{
		accessor: "purchased_at",
		title: "Purchase Date",
		sortable: true,
		render: (license) => license.purchased_at ? formatter.date.short(license.purchased_at) : null,
	},
	{
		accessor: "expires_at",
		title: "Expire Date",
		sortable: true,
		render: (license) => license.expires_at ? formatter.date.short(license.expires_at) : null,
	},
	{
		accessor: "terminates_at",
		title: "Termination Date",
		sortable: true,
		render: (license) => license.terminates_at ? formatter.date.short(license.terminates_at) : null,
	},
	{
		accessor: "maintained",
		title: "Maintained",
		sortable: true,
	},
	{
		accessor: "category.name",
		title: "Category",
		sortable: true,
		render: (license) => <Link href={ Routes.license(license) }>{ license.category?.name }</Link>,
	},
	{
		accessor: "vendor.name",
		title: "Vendor",
		sortable: true,
		render: (license) => <Link href={ Routes.license(license) }>{ license.vendor?.name }</Link>,
	},
	{
		accessor: "manufacturer.name",
		title: "Manufacturer",
		sortable: true,
		render: (license) => <Link href={ Routes.license(license) }>{ license.manufacturer?.name }</Link>,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (license) => (
			<Group wrap="nowrap" gap="sm" justify="flex-end">
				{ license.qty_available && <CheckoutButton
					href={ Routes.checkoutLicense(license) }
					disabled={ license.qty_available < 1 }
					tooltipMessage={ license.qty_available < 1 && "There are none to checkout" }
					label={ license.name }
				/> }
				<EditButton href={ Routes.editLicense(license) } />
			</Group>
		),
	},
]

interface LicensesTableProps {
	records: Schema.LicensesIndex[]
	pagination: Schema.Pagination
	model: string
}

const LicensesTable = ({ records, pagination, model }: LicensesTableProps) => {
	return (
		<Table.DataTable
			columns={ licensesColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default LicensesTable
