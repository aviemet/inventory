import React from 'react'
import { Heading, History } from '@/Components'
import { ShowAccessoryProps } from '.'

const AccessoryHistory = ({ accessory }: ShowAccessoryProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ accessory.assignments } activities={ accessory.activities } />
		</>
	)
}

export default AccessoryHistory
