import React from 'react'
import { Title, History } from '@/components'
import { ShowAccessoryProps } from '.'

const AccessoryHistory = ({ accessory }: ShowAccessoryProps) => {
	return (
		<>
			<Title order={ 3 }>History</Title>

			<History assignments={ accessory.assignments } activities={ accessory.activities } />
		</>
	)
}

export default AccessoryHistory
