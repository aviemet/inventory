import React from 'react'
import { Heading, History } from '@/Components'
import { ShowConsumableProps } from '.'

const ConsumableHistory = ({ consumable }: ShowConsumableProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ consumable.assignments } activities={ consumable.activities } />
		</>
	)
}

export default ConsumableHistory
