import React from 'react'
import { Title, History } from '@/Components'
import { ShowLicenseProps } from '.'

const LicenseHistory = ({ license }: ShowLicenseProps) => {
	return (
		<>
			<Title order={ 3 }>History</Title>

			<History assignments={ license.assignments } activities={ license.activities } />
		</>
	)
}

export default LicenseHistory
