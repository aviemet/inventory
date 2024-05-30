import React from 'react'
import { History } from '@/Components'
import { type ShowPersonProps } from '.'

const PersonHistory = ({ person }: ShowPersonProps) => {
	return (
		<>
			<History assignments={ person.assignments } activities={ person.activities } />
		</>
	)
}

export default PersonHistory
