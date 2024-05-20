import React from 'react'
import { Badge, SimpleGrid } from '@/Components'
import { Routes } from '@/lib'
import CountsCard from './CountsCard'
import { AccessoriesIcon, ComponentsIcon, ConsumablesIcon, ItemsIcon, LicensesIcon, PeopleIcon } from '@/Components/Icons'
import IconProvider from '@/Layouts/Providers/IconProvider'

type CompanyCounts = {
	locations: number
	items: number
	accessories: number
	consumables: number
	components: number
	departments: number
	licenses: number
	contracts: number
	people: number
	vendors: number
	manufacturers: number
}

const iconSize = '24px'

const Counts = ({ counts }: { counts: CompanyCounts }) => {
	return (
		<IconProvider
			size={ iconSize }
			style={ { minWidth: iconSize, maxWidth: iconSize } }
		>
			<SimpleGrid
				cols={ {
					base: 6,
					xs: 1,
					sm: 2,
					md: 3,
					lg: 6,
				} }>
				<CountsCard href={ Routes.items() }>
					<ItemsIcon />
					<div>Hardware</div>
					<div><Badge>{ counts.items }</Badge></div>
				</CountsCard>

				<CountsCard href={ Routes.accessories() }>
					<AccessoriesIcon />
					<div>Accessories</div>
					<div><Badge>{ counts.accessories }</Badge></div>
				</CountsCard>

				<CountsCard href={ Routes.components() }>
					<ComponentsIcon />
					<div>Components</div>
					<div><Badge>{ counts.components }</Badge></div>
				</CountsCard>

				<CountsCard href={ Routes.consumables() }>
					<ConsumablesIcon />
					<div>Consumables</div>
					<div><Badge>{ counts.consumables }</Badge></div>
				</CountsCard>

				<CountsCard href={ Routes.licenses() }>
					<LicensesIcon />
					<div>Licenses</div>
					<div><Badge>{ counts.licenses }</Badge></div>
				</CountsCard>

				<CountsCard href={ Routes.people() }>
					<PeopleIcon />
					<div>People</div>
					<div><Badge>{ counts.people }</Badge></div>
				</CountsCard>
			</SimpleGrid>
		</IconProvider>
	)
}

export default Counts
