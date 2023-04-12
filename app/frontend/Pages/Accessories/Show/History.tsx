import React from 'react'
import { Heading, History } from '@/Components'
import { IShowAccessoryProps } from '.'

const AccessoryHistory = ({ accessory }: IShowAccessoryProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ accessory.assignments } activities={ accessory.activities } />
		</>
	)
}

export default AccessoryHistory
