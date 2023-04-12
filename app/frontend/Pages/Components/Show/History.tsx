import React from 'react'
import { Heading, History } from '@/Components'
import { IShowComponentProps } from '.'

const ComponentHistory = ({ component }: IShowComponentProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ component.assignments } activities={ component.activities } />
		</>
	)
}

export default ComponentHistory
