import React from 'react'
import { Title, History } from '@/components'
import { ShowComponentProps } from '.'

const ComponentHistory = ({ component }: ShowComponentProps) => {
	return (
		<>
			<Title order={ 3 }>History</Title>

			<History assignments={ component.assignments } activities={ component.activities } />
		</>
	)
}

export default ComponentHistory
