import React from 'react'
import { Heading, History } from '@/Components'

interface IAccessoryHistoryProps {
	accessory: Schema.Accessory
}

const AccessoryHistory = ({ accessory }: IAccessoryHistoryProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ accessory.assignments } activities={ accessory.activities } />
		</>
	)
}

export default AccessoryHistory
