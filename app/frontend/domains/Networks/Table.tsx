import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const NetworksTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="address" sort="address">Network</Table.HeadCell>
					<Table.HeadCell columnId="gateway" sort="gateway">Gateway</Table.HeadCell>
					<Table.HeadCell columnId="dhcp_start" sort="dhcp_start">DHCP Start</Table.HeadCell>
					<Table.HeadCell columnId="dhcp_end" sort="dhcp_end">DHCP End</Table.HeadCell>
					<Table.HeadCell columnId="vlan_id" sort="vlan_id">VLAN Id</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
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
