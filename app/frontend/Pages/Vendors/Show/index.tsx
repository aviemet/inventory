import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Link, Menu, Flex, Heading, Card, Tabs, Table } from '@/Components'
import { Routes } from '@/lib'
import { EditIcon } from '@/Components/Icons'

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
			</Section>

			<Section>
				<Tabs>
					<Tabs.Tab label={ `Hardware (${vendor.items_count})` }>
						<Table></Table>
					</Tabs.Tab>
					<Tabs.Tab label={ `Accessories (${vendor.accessories_count})` }>
						<Table></Table>
					</Tabs.Tab>
					<Tabs.Tab label={ `Consumables (${vendor.consumables_count})` }>
						<Table></Table>
					</Tabs.Tab>
					<Tabs.Tab label={ `Components (${vendor.components_count})` }>
						<Table></Table>
					</Tabs.Tab>
					<Tabs.Tab label={ `Licenses (${vendor.licenses_count})` }>
						<Table></Table>
					</Tabs.Tab>
				</Tabs>

			</Section>
		</>
	)
}

export default Show
