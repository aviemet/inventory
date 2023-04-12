import React, { useEffect, useState } from 'react'
import { SpotlightProvider as MantineSpotlightProvider } from '@mantine/spotlight'
import type { SpotlightAction } from '@mantine/spotlight'
import { SearchIcon, DashboardIcon, ItemsIcon, SettingsIcon, AssetsIcon, AccessoriesIcon, ComponentsIcon, ConsumablesIcon } from '@/Components/Icons'
import { router } from '@inertiajs/react'
import { Routes } from '@/lib'
import axios from 'axios'
import { Loader } from '@mantine/core'

const defaultActions: SpotlightAction[] = [
	{
		title: 'Dashboard',
		description: 'Personalized start page for your organization',
		group: 'Dashboard',
		onTrigger: () => router.get(Routes.root()),
		icon: <DashboardIcon size={ 18 } />,
	},

	{
		title: 'All Assets',
		description: 'View all company assets',
		group: 'Assets',
		onTrigger: () => router.get(Routes.assets()),
		icon: <AssetsIcon size={ 18 } />,
	},
	{
		title: 'Hardware',
		description: 'View all hardware items',
		group: 'Assets',
		onTrigger: () => router.get(Routes.items()),
		icon: <ItemsIcon size={ 18 } />,
	},
	{
		title: 'Accessories',
		description: 'View all accessories',
		group: 'Assets',
		onTrigger: () => router.get(Routes.accessories()),
		icon: <AccessoriesIcon size={ 18 } />,
	},
	{
		title: 'Components',
		description: 'View all components',
		group: 'Assets',
		onTrigger: () => router.get(Routes.components()),
		icon: <ComponentsIcon size={ 18 } />,
	},
	{
		title: 'Consumables',
		description: 'View all consumables',
		group: 'Assets',
		onTrigger: () => router.get(Routes.consumables()),
		icon: <ConsumablesIcon size={ 18 } />,
	},

	{
		title: 'Tickets',
		description: 'Support tickets',
		group: 'Tickets',
		onTrigger: () => router.get(Routes.tickets()),
		icon: <DashboardIcon size={ 18 } />,
	},

	{
		title: 'Settings',
		description: 'Site configuration and settings',
		group: 'Settings',
		onTrigger: () => router.get(Routes.settingsGeneralIndex()),
		icon: <SettingsIcon size={ 18 } />,
	},
]

type TValues = {
	items: Schema.Item[]
	accessories: Schema.Accessory[]
	components: Schema.Component[]
	consumables: Schema.Consumable[]
	licenses: Schema.License[]
	people: Schema.Person[]
	tickets: Schema.Ticket[]
	networks: Schema.Network[]
	vendors: Schema.Vendor[]
	contracts: Schema.Contract[]
}

const generateActions = (values?: TValues) => {
	if(!values) return []

	return [
		...values.items.map(item => ({
			title: item.name,
			description: `${item.type}: ${item?.model?.name || ''}`,
			group: 'Items',
			onTrigger: () => router.get(Routes.item(item.id)),
			icon: <SettingsIcon size={ 18 } />,
			keywords: ['items'],
		})),
		...values.accessories.map(accessory => ({
			title: accessory.name,
			description: `${accessory.type}: ${accessory?.model?.name || ''}`,
			group: 'Accessories',
			onTrigger: () => router.get(Routes.accessory(accessory.id)),
			icon: <SettingsIcon size={ 18 } />,
			keywords: ['accessory', 'accessories'],
		})),
		...values.components.map(component => ({
			title: component.name,
			description: `${component.type}: ${component?.model?.name || ''}`,
			group: 'Components',
			onTrigger: () => router.get(Routes.component(component.id)),
			icon: <SettingsIcon size={ 18 } />,
			keywords: ['components'],
		})),
		...values.consumables.map(consumable => ({
			title: consumable.name,
			description: `${consumable.type}: ${consumable?.model?.name || ''}`,
			group: 'Consumables',
			onTrigger: () => router.get(Routes.consumable(consumable.id)),
			icon: <SettingsIcon size={ 18 } />,
			keywords: ['consumables'],
		})),
		...values.licenses.map(license => ({
			title: license.name,
			description: license?.manufacturer?.name || '',
			group: 'Licenses',
			onTrigger: () => router.get(Routes.license(license.id)),
			icon: <SettingsIcon size={ 18 } />,
			keywords: ['licenses'],
		})),
		...values.people.map(person => ({
			title: person.name!,
			description: person?.job_title || '',
			group: 'People',
			onTrigger: () => router.get(Routes.person(person.id)),
			icon: <SettingsIcon size={ 18 } />,
			keywords: ['people', 'person'],
		})),
		...values.tickets.map(ticket => ({
			title: ticket.subject,
			description: ticket?.primary_contact?.name || '',
			group: 'Tickets',
			onTrigger: () => router.get(Routes.ticket(ticket.id)),
			icon: <SettingsIcon size={ 18 } />,
			keywords: ['tickets'],
		})),
		...values.networks.map(network => ({
			title: `${network.name || network.address}`,
			description: `${network.vlan_id + '+' ?? ''}${network.name ? network.address : ''}`,
			group: 'Networks',
			onTrigger: () => router.get(Routes.network(network.id)),
			icon: <SettingsIcon size={ 18 } />,
			keywords: ['networks'],
		})),
		...values.vendors.map(vendor => ({
			title: vendor.name,
			description: vendor.url || '',
			group: 'Vendors',
			onTrigger: () => router.get(Routes.vendor(vendor.slug)),
			icon: <SettingsIcon size={ 18 } />,
			keywords: ['vendors'],
		})),
		...values.contracts.map(contract => ({
			title: contract.name,
			description: contract?.vendor?.name || '',
			group: 'Contracts',
			onTrigger: () => router.get(Routes.contract(contract.id)),
			icon: <SettingsIcon size={ 18 } />,
			keywords: ['contracts'],
		})),
	]
}

const SpotlightProvider = ({ children }: { children: React.ReactNode }) => {
	const [query, setQuery] = useState('')
	const [values, setValues] = useState<TValues>()
	const [actions, setActions] = useState(defaultActions)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if(query === '') {
			setActions(defaultActions)
			return
		}

		if(values === undefined) {
			setLoading(true)
			axios.get(Routes.apiSpotlights())
				.then(response => {
					setValues(response.data)
					setLoading(false)
				})
		}

		setActions(generateActions(values))
	}, [query])

	return (
		<MantineSpotlightProvider
			actions={ actions }
			searchIcon={ <SearchIcon size={ 18 } /> }
			searchPlaceholder="Search..."
			nothingFoundMessage={ loading ? <Loader /> : 'Nothing found...' }
			onQueryChange={ setQuery }
			query={ query }
		>
			{ children }
		</MantineSpotlightProvider>
	)
}

export default SpotlightProvider
