import React from 'react'
import { Badge, Group } from '@/Components'
import { Routes } from '@/lib'
import CountsCard from './CountCard'
import { AccessoriesIcon, ComponentsIcon, ConsumablesIcon, ItemsIcon, LicensesIcon, PeopleIcon } from '@/Components/Icons'

const Counts = ({ counts }: { counts: Schema.CompanyCounts }) => {
	return (
		<Group sx={ theme => ({
			'.mantine-Card-root': {
				flex: 1,
				transition: 'background-color ease-in-out 250ms',

				'&:hover': {
					backgroundColor: theme.other.colorSchemeOption(theme.fn.primaryColor()[2], theme.fn.primaryColor()[8]),
				},
			},

			'a:hover': {
				textDecoration: 'none',
			},
		}) }>
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
		</Group>
	)
}

export default Counts
