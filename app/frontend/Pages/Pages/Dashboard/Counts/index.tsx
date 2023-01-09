import React from 'react'
import { Badge, SimpleGrid } from '@/Components'
import { Routes } from '@/lib'
import CountsCard from './CountsCard'
import { AccessoriesIcon, ComponentsIcon, ConsumablesIcon, ItemsIcon, LicensesIcon, PeopleIcon } from '@/Components/Icons'

const Counts = ({ counts }: { counts: Schema.CompanyCounts }) => {
	return (
		<SimpleGrid
			cols={ 6 }
			breakpoints={ [
				{ maxWidth: 'lg', cols: 3 },
				{ maxWidth: 'sm', cols: 2 },
				{ maxWidth: 'xs', cols: 1 },
			] }>
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
	)
}

export default Counts
