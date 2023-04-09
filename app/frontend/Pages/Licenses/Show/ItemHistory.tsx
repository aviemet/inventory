import React from 'react'
import { Heading, History } from '@/Components'
import { IShowLicenseProps } from '.'

const LicenseHistory = ({ license }: IShowLicenseProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ license.assignments } activities={ license.activities } />
		</>
	)
}

export default LicenseHistory
