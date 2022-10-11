import React from 'react'
import { Heading, History } from '@/Components'

interface IConsumableHistoryProps {
	consumable: Schema.Consumable
}

const ConsumableHistory = ({ consumable }: IConsumableHistoryProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ consumable.assignments } audits={ consumable.audits } />
		</>
	)
}

export default ConsumableHistory
