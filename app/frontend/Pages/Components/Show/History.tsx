import React from 'react'
import { Heading, History } from '@/Components'

interface IComponentHistoryProps {
	component: Schema.Component
}

const ComponentHistory = ({ component }: IComponentHistoryProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ component.assignments } activities={ component.activities } />
		</>
	)
}

export default ComponentHistory
