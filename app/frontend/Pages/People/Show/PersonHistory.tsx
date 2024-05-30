import React from 'react'
import { History } from '@/Components'
import { type ShowPersonProps } from '.'

const PersonHistory = ({ person }: ShowPersonProps) => {
	return (
		<>
			<History
				assignments={ person.possessions }
				activities={ person.activities }
			/>
		</>
	)
}

export default PersonHistory
