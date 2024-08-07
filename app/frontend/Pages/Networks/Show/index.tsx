import React from 'react'
import { Section, Menu, Flex, Group, Title, Table, Container, Page, Paper } from '@/Components'
import { createContext } from '@/lib/hooks'
import { Routes } from '@/lib'
import NetworkDetailsTable from './NetworkDetailsTable'
import { EditIcon } from '@/Components/Icons'

interface ShowNetworkProps {
	network: Schema.NetworksShow
	ips: Schema.IpLeasesShow[]
	pagination: Schema.Pagination
}

const [useNetworkContext, NetworkContextProvider] = createContext<{ network: Schema.NetworksShow }>()
export { useNetworkContext }

const Show = ({ network, ips, pagination }: ShowNetworkProps) => {
	const title = network.name || 'Show Network'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Networks', href: Routes.networks() },
			{ title: network.name, href: window.location.href },
		] }>
			<Section>
				<Group justify="space-between">
					<Title style={ { flex: 1 } }>{ title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editNetwork(network) } leftSection={ <EditIcon /> }>
								Edit
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

				<Container>
					<Flex>
						<Table wrapper={ false } style={ { flex: 1 } }>
							<Table.Body>

								<Table.Row>
									<Table.Cell>Network</Table.Cell>
									<Table.Cell>{ network.address }</Table.Cell>
								</Table.Row>

								<Table.Row>
									<Table.Cell>Network Address</Table.Cell>
									<Table.Cell>{ network.address!.split('/')[0] }</Table.Cell>
								</Table.Row>

								<Table.Row>
									<Table.Cell>VLAN ID</Table.Cell>
									<Table.Cell>{ network.vlan_id }</Table.Cell>
								</Table.Row>

								<Table.Row>
									<Table.Cell>Number of Hosts</Table.Cell>
									<Table.Cell>{ pagination.count.toLocaleString('en-US') }</Table.Cell>
								</Table.Row>

							</Table.Body>
						</Table>

						<Table wrapper={ false } style={ { flex: 1 } }>
							<Table.Body>
								<Table.Row>
									<Table.Cell>Gateway</Table.Cell>
									<Table.Cell>{ network.gateway }</Table.Cell>
								</Table.Row>

								<Table.Row>
									<Table.Cell>Broadcast Address</Table.Cell>
									<Table.Cell>{ network.broadcast }</Table.Cell>
								</Table.Row>

								<Table.Row>
									<Table.Cell>DHCP Start</Table.Cell>
									<Table.Cell>{ network.dhcp_start }</Table.Cell>
								</Table.Row>

								<Table.Row>
									<Table.Cell>DHCP End</Table.Cell>
									<Table.Cell>{ network.dhcp_end }</Table.Cell>
								</Table.Row>

							</Table.Body>
						</Table>
					</Flex>

					{ network.notes && <Paper p="sm" my="sm">{ network.notes }</Paper> }

				</Container>
			</Section>

			<br />

			<Section>
				<Title order={ 2 }>Addresses</Title>

				<NetworkContextProvider value={ { network } }>
					<NetworkDetailsTable
						hosts={ network.hosts }
						ips={ ips }
						pagination={ pagination }
					/>
				</NetworkContextProvider>
			</Section>
		</Page>
	)
}

export default Show
