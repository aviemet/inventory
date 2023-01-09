import React from 'react'
import { Card, Group, Link } from '@/Components'

interface ICountCardProps {
	children: React.ReactNode
	href: string
}

const CountCard = ({ children, href }: ICountCardProps) => {
	return (
		<Card
			component={ Link }
			href={ href }
			shadow="sm"
			sx={ theme => ({
				flexGrow: 1,
				flexShrink: 1,
				flexBasis: '170px',
				transition: 'background-color ease-in-out 250ms',

				'&&:hover': {
					backgroundColor: theme.other.colorSchemeOption(theme.colors[theme.primaryColor][2], theme.colors[theme.primaryColor][8]),
					textDecoration: 'none',
				},

			}) }>
			<Group position="apart" noWrap>{ children }</Group>
		</Card>

	)
}

export default CountCard
