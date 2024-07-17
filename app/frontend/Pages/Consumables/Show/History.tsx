import React from 'react'
import { Title, History } from '@/Components'
import { ShowConsumableProps } from '.'

const ConsumableHistory = ({ consumable }: ShowConsumableProps) => {
	return (
		<>
			<Title order={ 3 }>History</Title>

			<History assignments={ consumable.assignments } activities={ consumable.activities } />
		</>
	)
}

export default ConsumableHistory
