import React from 'react'
import { Card, Group, Link } from '@/Components'

interface ICountCardProps {
	children: React.ReactNode
	href: string
}

const CountCard = ({ children, href }: ICountCardProps) => {
	return (
		<Card component={ Link } href={ href } shadow="sm">
			<Group position="apart">{ children }</Group>
		</Card>

	)
}

export default CountCard
