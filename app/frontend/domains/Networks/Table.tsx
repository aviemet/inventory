import { type DataTableColumn } from "mantine-datatable"

import { Link } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

export const networksColumns: DataTableColumn<Schema.NetworksIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (network) => <Link href={ Routes.network(network) }>{ network.name }</Link>,
	},
	{
		accessor: "address",
		title: "Network",
		sortable: true,
		render: (network) => <Link href={ Routes.network(network) }>{ network.address }</Link>,
	},
	{
		accessor: "gateway",
		title: "Gateway",
		sortable: true,
		render: (network) => <Link href={ Routes.network(network) }>{ network.gateway }</Link>,
	},
	{
		accessor: "dhcp_start",
		title: "DHCP Start",
		sortable: true,
		render: (network) => <Link href={ Routes.network(network) }>{ network.dhcp_start }</Link>,
	},
	{
		accessor: "dhcp_end",
		title: "DHCP End",
		sortable: true,
		render: (network) => <Link href={ Routes.network(network) }>{ network.dhcp_end }</Link>,
	},
	{
		accessor: "vlan_id",
		title: "VLAN Id",
		sortable: true,
		render: (network) => <Link href={ Routes.network(network) }>{ network.vlan_id }</Link>,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (network) => <EditButton href={ Routes.editNetwork(network) } label={ network.name } />,
	},
]

import { Table } from "@/components"

interface NetworksTableProps {
	records: Schema.NetworksIndex[]
	pagination: Schema.Pagination
	model: string
}

const NetworksTable = ({ records, pagination, model }: NetworksTableProps) => {
	return (
		<Table.DataTable
			columns={ networksColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default NetworksTable
