import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Link, Menu, Flex, Heading, Tabs, Table } from '@/Components'
import { Routes } from '@/lib'
import { NewIcon, EditIcon } from '@/Components/Icons'
import ItemsTable from '@/Pages/Items/Table'

type ShowPageVendor = Schema.Vendor & {
	items_count: number
	accessories_count: number
	consumables_count: number
	components_count: number
	licenses_count: number
}

interface IVendorShowProps {
	vendor: ShowPageVendor
}

const Show = ({ vendor }: IVendorShowProps) => {
	const title = vendor.name ?? 'Vendor Details'

	const handleTabChange = (i: number, key: string) => {
		console.log({ i, key })
	}

	const pagination = {}

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{
						vendor.url ?
							<Link href={ vendor.url } target="_blank" rel="noreferrer">{ title }</Link>
							:
							title
					}</Heading>

					<Menu>
						<Menu.Item href={ Routes.editVendor(vendor.slug) } icon={ <EditIcon /> }>
							Edit
						</Menu.Item>
					</Menu>
				</Flex>

				<Tabs onTabChange={ handleTabChange }>
					<Tabs.Tab tabKey="items" label={ `Hardware (${vendor.items_count})` }>

						<Table.Section>
							<Table.TableProvider
								selectable
								hideable
								model="items"
								rows={ vendor.items }
								pagination={ pagination }
							>

								<Table.Title
									title={ title }
									menuOptions={ [
										{ label: 'New Asset', href: Routes.newItem(), icon: NewIcon },
									] }
								/>

								<ItemsTable items={ vendor.items ?? [] } pagination={ pagination } />

								<Table.Pagination />
							</Table.TableProvider>
						</Table.Section>
					</Tabs.Tab>

					<Tabs.Tab tabKey="accessories" label={ `Accessories (${vendor.accessories_count})` }>
						<Table></Table>
					</Tabs.Tab>

					<Tabs.Tab tabKey="consumables" label={ `Consumables (${vendor.consumables_count})` }>
						<Table></Table>
					</Tabs.Tab>

					<Tabs.Tab tabKey="components" label={ `Components (${vendor.components_count})` }>
						<Table></Table>
					</Tabs.Tab>

					<Tabs.Tab tabKey="licenses" label={ `Licenses (${vendor.licenses_count})` }>
						<Table></Table>
					</Tabs.Tab>
				</Tabs>

			</Section>
		</>
	)
}

export default Show
