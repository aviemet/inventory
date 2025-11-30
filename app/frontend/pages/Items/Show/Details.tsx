
import { Link, Title, Table, Box, Badge, Money } from "@/components"
import { formatter, Routes } from "@/lib"

import AssignmentLink from "./AssignmentLink"

interface ItemDetailsProps {
	item: Schema.ItemsShow
}

const ItemDetails = ({ item }: ItemDetailsProps) => {
	return (
		<>
			<Title order={ 2 }>Details</Title>

			<Box style={ theme => ({ maxWidth: `${theme.breakpoints.sm}` }) }>
				<Table>
					<Table.Body>

						<Table.Row>
							<Table.Cell>{ item.assigned ? "Assigned To" : "Status" }</Table.Cell>
							<Table.Cell>
								{ item.assigned ?
									<AssignmentLink item={ item } />
									:
									<Badge>{ item.status_label?.name }</Badge>
								}
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Serial</Table.Cell>
							<Table.Cell>{ item.serial }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Asset Tag</Table.Cell>
							<Table.Cell>{ item.asset_tag }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Manufacturer</Table.Cell>
							<Table.Cell>
								{ item.manufacturer && <Link href={ Routes.manufacturer(item.manufacturer.slug) }>
									{ item.manufacturer!.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Model</Table.Cell>
							<Table.Cell>
								{ item.model && <Link href={ Routes.model(item.model.slug) }>
									{ item.model.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Vendor</Table.Cell>
							<Table.Cell>
								{ item.vendor && <Link href={ Routes.vendor(item.vendor.slug) }>
									{ item.vendor.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Category</Table.Cell>
							<Table.Cell>
								{ item.category && <Link href={ Routes.category(item.category.slug) }>
									{ item.category.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Purchase Cost</Table.Cell>
							<Table.Cell>
								<Money accounting={ false } currency={ item.cost_currency }>{ item.cost }</Money>
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Purchase Date</Table.Cell>
							<Table.Cell>{ item.purchased_at && formatter.date.short(item.purchased_at) }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>IP Address</Table.Cell>
							<Table.Cell>{ item.nics?.filter(nic => (
								nic?.ips?.some(ip => ip.active && ip.address)
							)).map(nic => (
								nic?.ips?.map(ip => (
									<div key={ ip.address }>{ ip.address }</div>
								))
							)) }</Table.Cell>
						</Table.Row>

					</Table.Body>
				</Table>
			</Box>
		</>
	)
}

export default ItemDetails
