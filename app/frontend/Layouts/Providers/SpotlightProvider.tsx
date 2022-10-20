import React from 'react'
import { SpotlightProvider as MantineSpotlightProvider } from '@mantine/spotlight'
import type { SpotlightAction } from '@mantine/spotlight'
import { SearchIcon, DashboardIcon, ItemsIcon, SettingsIcon } from '@/Components/Icons'
import { Inertia } from '@inertiajs/inertia'
import { Routes } from '@/lib'

const actions: SpotlightAction[] = [
	{
		title: 'Dashboard',
		description: 'Get full information about current system status',
		onTrigger: () => Inertia.get(Routes.root()),
		icon: <DashboardIcon size={ 18 } />,
	},
	{
		title: 'Hardware',
		description: 'View hardware items',
		onTrigger: () => Inertia.get(Routes.items()),
		icon: <ItemsIcon size={ 18 } />,
	},
	{
		title: 'Settings',
		description: 'Visit documentation to lean more about all features',
		onTrigger: () => Inertia.get(Routes.settings()),
		icon: <SettingsIcon size={ 18 } />,
	},
]

const SpotlightProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<MantineSpotlightProvider
			actions={ actions }
			searchIcon={ <SearchIcon size={ 18 } /> }
			searchPlaceholder="Search..."
			shortcut="mod + k"
			nothingFoundMessage="Nothing found..."
		>
			{ children }
		</MantineSpotlightProvider>
	)
}

export default SpotlightProvider
