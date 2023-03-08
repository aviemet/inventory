import React from 'react'
import { Heading, History } from '@/Components'

interface ILicenseHistoryProps {
	license: Schema.License
}

const LicenseHistory = ({ license }: ILicenseHistoryProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ license.assignments } activities={ license.activities } />
		</>
	)
}

export default LicenseHistory
