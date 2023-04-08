import React from 'react'
import { Heading, History } from '@/Components'
import { IShowConsumableProps } from '.'

const ConsumableHistory = ({ consumable }: IShowConsumableProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ consumable.assignments } activities={ consumable.activities } />
		</>
	)
}

export default ConsumableHistory
