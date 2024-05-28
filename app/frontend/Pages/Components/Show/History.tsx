import React from 'react'
import { Heading, History } from '@/Components'
import { ShowComponentProps } from '.'

const ComponentHistory = ({ component }: ShowComponentProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ component.assignments } activities={ component.activities } />
		</>
	)
}

export default ComponentHistory
