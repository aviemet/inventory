import React from 'react'
import { Heading, History } from '@/Components'
import { ShowLicenseProps } from '.'

const LicenseHistory = ({ license }: ShowLicenseProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ license.assignments } activities={ license.activities } />
		</>
	)
}

export default LicenseHistory
