import React, { useEffect, useState } from 'react'
import { Spotlight, type SpotlightActionData } from '@mantine/spotlight'
import {
	DashboardIcon,
	ItemsIcon,
	SettingsIcon,
	AssetsIcon,
	AccessoriesIcon,
	ComponentsIcon,
	ConsumablesIcon,
	SearchIcon,
} from '@/Components/Icons'
import { router } from '@inertiajs/react'
import { Routes } from '@/lib'
import { Loader } from '@mantine/core'
import { useGetSpotlightResults } from '@/queries'

const defaultActions: SpotlightActionData[] = [
	{
		id: 'dashboard',
		label: 'Dashboard',
		description: 'Personalized start page for your organization',
		group: 'Dashboard',
		onClick: () => router.get(Routes.root()),
		leftSection: <DashboardIcon size={ 18 } />,
	},

	{
		id: 'assets',
		label: 'All Assets',
		description: 'View all company assets',
		group: 'Assets',
		onClick: () => router.get(Routes.assets()),
		leftSection: <AssetsIcon size={ 18 } />,
	},
	{
		id: 'items',
		label: 'Hardware',
		description: 'View all hardware items',
		group: 'Assets',
		onClick: () => router.get(Routes.items()),
		leftSection: <ItemsIcon size={ 18 } />,
	},
	{
		id: 'accessories',
		label: 'Accessories',
		description: 'View all accessories',
		group: 'Assets',
		onClick: () => router.get(Routes.accessories()),
		leftSection: <AccessoriesIcon size={ 18 } />,
	},
	{
		id: 'components',
		label: 'Components',
		description: 'View all components',
		group: 'Assets',
		onClick: () => router.get(Routes.components()),
		leftSection: <ComponentsIcon size={ 18 } />,
	},
	{
		id: 'consumables',
		label: 'Consumables',
		description: 'View all consumables',
		group: 'Assets',
		onClick: () => router.get(Routes.consumables()),
		leftSection: <ConsumablesIcon size={ 18 } />,
	},

	{
		id: 'tickets',
		label: 'Tickets',
		description: 'Support tickets',
		group: 'Tickets',
		onClick: () => router.get(Routes.tickets()),
		leftSection: <DashboardIcon size={ 18 } />,
	},

	{
		id: 'settings',
		label: 'Settings',
		description: 'Site configuration and settings',
		group: 'Settings',
		onClick: () => router.get(Routes.settingsGeneralIndex()),
		leftSection: <SettingsIcon size={ 18 } />,
	},
]


export type SpotlightSearchValues = {
	items: Schema.ItemsSpotlight[]
	accessories: Schema.AccessoriesSpotlight[]
	components: Schema.ComponentsSpotlight[]
	consumables: Schema.ConsumablesSpotlight[]
	licenses: Schema.LicensesSpotlight[]
	people: Schema.PeopleSpotlight[]
	tickets: Schema.TicketsSpotlight[]
	networks: Schema.NetworksSpotlight[]
	vendors: Schema.VendorsSpotlight[]
	contracts: Schema.ContractsSpotlight[]
}

const generateActions = (values?: SpotlightSearchValues) => {
	if(!values) return []

	return [
		...values.items.map(item => ({
			id: item.id,
			label: item.name,
			description: `${item.type}: ${item?.model?.name || ''}`,
			group: 'Items',
			onClick: () => router.get(Routes.item(item.id)),
			leftSection: <SettingsIcon size={ 18 } />,
			keywords: ['items'],
		})),
		...values.accessories.map(accessory => ({
			id: accessory.id,
			label: accessory.name,
			description: `${accessory.type}: ${accessory?.model?.name || ''} (${accessory?.qty})`,
			group: 'Accessories',
			onClick: () => router.get(Routes.accessory(accessory.id)),
			leftSection: <SettingsIcon size={ 18 } />,
			keywords: ['accessory', 'accessories'],
		})),
		...values.components.map(component => ({
			id: component.id,
			label: component.name,
			description: `${component.type}: ${component?.model?.name || ''} (${component?.qty})`,
			group: 'Components',
			onClick: () => router.get(Routes.component(component.id)),
			leftSection: <SettingsIcon size={ 18 } />,
			keywords: ['components'],
		})),
		...values.consumables.map(consumable => ({
			id: consumable.id,
			label: consumable.name,
			description: `${consumable.type}: ${consumable?.model?.name || ''} (${consumable?.qty})`,
			group: 'Consumables',
			onClick: () => router.get(Routes.consumable(consumable.id)),
			leftSection: <SettingsIcon size={ 18 } />,
			keywords: ['consumables'],
		})),
		...values.licenses.map(license => ({
			id: license.id,
			label: license.name,
			description: license?.manufacturer?.name || '',
			group: 'Licenses',
			onClick: () => router.get(Routes.license(license.id)),
			leftSection: <SettingsIcon size={ 18 } />,
			keywords: ['licenses'],
		})),
		...values.people.map(person => ({
			id: person.id,
			label: person.name,
			description: person?.job_title || '',
			group: 'People',
			onClick: () => router.get(Routes.person(person.id)),
			leftSection: <SettingsIcon size={ 18 } />,
			keywords: ['people', 'person'],
		})),
		...values.tickets.map(ticket => ({
			id: ticket.id,
			label: ticket.subject,
			description: ticket?.primary_contact?.name || '',
			group: 'Tickets',
			onClick: () => router.get(Routes.ticket(ticket.id)),
			leftSection: <SettingsIcon size={ 18 } />,
			keywords: ['tickets'],
		})),
		...values.networks.map(network => ({
			id: network.id,
			label: `${network.name || network.address}`,
			description: `${network.vlan_id + '+'}${network.name ? network.address : ''}`,
			group: 'Networks',
			onClick: () => router.get(Routes.network(network.id)),
			leftSection: <SettingsIcon size={ 18 } />,
			keywords: ['networks'],
		})),
		...values.vendors.map(vendor => ({
			id: vendor.id,
			label: vendor.name,
			description: vendor.url || '',
			group: 'Vendors',
			onClick: () => router.get(Routes.vendor(vendor.slug)),
			leftSection: <SettingsIcon size={ 18 } />,
			keywords: ['vendors'],
		})),
		...values.contracts.map(contract => ({
			id: contract.id,
			label: contract.name,
			description: contract?.vendor?.name || '',
			group: 'Contracts',
			onClick: () => router.get(Routes.contract(contract.id)),
			leftSection: <SettingsIcon size={ 18 } />,
			keywords: ['contracts'],
		})),
	]
}

const SpotlightComponent = () => {
	const [query, setQuery] = useState('')
	const [actions, setActions] = useState(defaultActions)

	const {
		data,
		refetch,
		isLoading,
		isFetching,
		isPending,
		isFetched,
		isSuccess,
		isStale,
	} = useGetSpotlightResults({ searchParams: query }, {
		enabled: false,
	})

	const handleQueryChange = (query: string) => {
		setQuery(query)

		if(query === '') {
			setActions(defaultActions)
		} else {
			setActions(generateActions(data))
		}

		if(!isFetched || isStale) {
			refetch()
		}
	}

	useEffect(() => {
		if(query !== '' && isSuccess) {
			setActions(generateActions(data))
		}
	}, [isSuccess])

	const loading = isLoading || isFetching || isPending

	return (
		<Spotlight
			actions={ actions }
			limit={ 5 }
			nothingFound={ loading ? <Loader /> : 'Nothing found...' }
			onQueryChange={ handleQueryChange }
			query={ query }
			searchProps={ {
				leftSection: <SearchIcon size={ 28 } />,
			} }
		/>
	)
}

export default SpotlightComponent
