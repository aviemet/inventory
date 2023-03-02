import React from 'react'
import { SpotlightProvider as MantineSpotlightProvider } from '@mantine/spotlight'
import type { SpotlightAction } from '@mantine/spotlight'
import { SearchIcon, DashboardIcon, ItemsIcon, SettingsIcon, AssetsIcon, AccessoriesIcon, ComponentsIcon, ConsumablesIcon } from '@/Components/Icons'
import { router } from '@inertiajs/react'
import { Routes } from '@/lib'

const actions: SpotlightAction[] = [
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
		title: 'Settings',
		description: 'Site configuration and settings',
		group: 'Settings',
		onTrigger: () => router.get(Routes.settings()),
		icon: <SettingsIcon size={ 18 } />,
	},
]

const SpotlightProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<MantineSpotlightProvider
			actions={ actions }
			searchIcon={ <SearchIcon size={ 18 } /> }
			searchPlaceholder="Search..."
			nothingFoundMessage="Nothing found..."
		>
			{ children }
		</MantineSpotlightProvider>
	)
}

export default SpotlightProvider
