import React from 'react'
import { Heading, History } from '@/Components'
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
