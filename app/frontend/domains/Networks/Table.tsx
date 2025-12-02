import { createColumnHelper } from "@tanstack/react-table"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.NetworksIndex>()

export const networksColumns = [
	columnHelper.accessor("name", {
		header: "Name",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: false,
		},
	}),
	columnHelper.accessor("address", {
		header: "Network",
		enableSorting: true,
		meta: {
			model: "address",
			hideable: "address",
		},
	}),
	columnHelper.accessor("gateway", {
		header: "Gateway",
		enableSorting: true,
		meta: {
			model: "gateway",
			hideable: "gateway",
		},
	}),
	columnHelper.accessor("dhcp_start", {
		header: "DHCP Start",
		enableSorting: true,
		meta: {
			model: "dhcp_start",
			hideable: "dhcp_start",
		},
	}),
	columnHelper.accessor("dhcp_end", {
		header: "DHCP End",
		enableSorting: true,
		meta: {
			model: "dhcp_end",
			hideable: "dhcp_end",
		},
	}),
	columnHelper.accessor("vlan_id", {
		header: "VLAN Id",
		enableSorting: true,
		meta: {
			model: "vlan_id",
			hideable: "vlan_id",
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

const NetworksTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="address" />
					<Table.HeadCell columnId="gateway" />
					<Table.HeadCell columnId="dhcp_start" />
					<Table.HeadCell columnId="dhcp_end" />
					<Table.HeadCell columnId="vlan_id" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (network: Schema.NetworksIndex) => (
					<Table.Row key={ network.id }>

						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.network(network) }>{ network.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="address">
							<Link href={ Routes.network(network) }>{ network.address }</Link>
						</Table.Cell>

						<Table.Cell columnId="gateway">
							<Link href={ Routes.network(network) }>{ network.gateway }</Link>
						</Table.Cell>

						<Table.Cell columnId="dhcp_start">
							<Link href={ Routes.network(network) }>{ network.dhcp_start }</Link>
						</Table.Cell>

						<Table.Cell columnId="dhcp_end">
							<Link href={ Routes.network(network) }>{ network.dhcp_end }</Link>
						</Table.Cell>

						<Table.Cell columnId="vlan_id">
							<Link href={ Routes.network(network) }>{ network.vlan_id }</Link>
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editNetwork(network) } label={ network.name } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default NetworksTable
