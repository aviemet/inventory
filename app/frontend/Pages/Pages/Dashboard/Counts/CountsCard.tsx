import React from 'react'
import { Card, Group, Link } from '@/Components'

interface CountCardProps {
	children: React.ReactNode
	href: string
}

const CountCard = ({ children, href }: CountCardProps) => {
	return (
		<Card
			component={ Link }
			href={ href }
			shadow="sm"
			style={ theme => ({
				flexGrow: 1,
				flexShrink: 1,
				flexBasis: '170px',
				transition: 'background-color ease-in-out 250ms',

				'&&:hover': {
					// backgroundColor: theme.other.colorSchemeOption(theme.colors[theme.primaryColor][2], theme.colors[theme.primaryColor][8]),
					textDecoration: 'none',
				},

			}) }>
			<Group justify="space-between" wrap="nowrap">{ children }</Group>
		</Card>

	)
}

export default CountCard
