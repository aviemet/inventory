import React from 'react'
import { Group } from '@/Components'
import { Routes } from '@/lib'
import CountsCard from './CountCard'

const Counts = ({ counts }: { counts: Schema.CompanyCounts }) => {
	return (
		<Group sx={ theme => ({
			'.mantine-Card-root': {
				flex: 1,
				transition: 'background-color ease-in-out 250ms',

				'&:hover': {
					backgroundColor: theme.other.colorSchemeOption(theme.colors[theme.primaryColor][2], theme.colors[theme.primaryColor][8])
				},
			},

			'a:hover': {
				textDecoration: 'none',
			},
		}) }>
			<CountsCard href={ Routes.items() }>
				<Group>
					<div>Hardware</div>
					<div>{ counts.items }</div>
				</Group>
			</CountsCard>

			<CountsCard href={ Routes.accessories() }>
				<Group>
					<div>Accessories</div>
					<div>{ counts.accessories }</div>
				</Group>
			</CountsCard>

			<CountsCard href={ Routes.components() }>
				<Group>
					<div>Components</div>
					<div>{ counts.components }</div>
				</Group>
			</CountsCard>

			<CountsCard href={ Routes.consumables() }>
				<Group>
					<div>Consumables</div>
					<div>{ counts.consumables }</div>
				</Group>
			</CountsCard>

			<CountsCard href={ Routes.licenses() }>
				<Group>
					<div>Licenses</div>
					<div>{ counts.licenses }</div>
				</Group>
			</CountsCard>

			<CountsCard href={ Routes.people() }>
				<Group>
					<div>People</div>
					<div>{ counts.people }</div>
				</Group>
			</CountsCard>
		</Group>
	)
}

export default Counts
