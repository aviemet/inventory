import React from 'react'
import { Heading, History } from '@/Components'

interface IHardwareHistoryProps {
	hardware: Schema.Hardware
}

const HardwareHistory = ({ hardware }: IHardwareHistoryProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ hardware.assignments } activities={ hardware.activities } />
		</>
	)
}

export default HardwareHistory
