import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import LicensesTable from '../Table'

interface ILicensesIndexProps {
	licenses: Schema.License[]
	pagination: Schema.Pagination
}

const LicencesIndex = ({ licenses, pagination }: ILicensesIndexProps ) => {
	return (
		<IndexPageTemplate
			title="Licenses"
			model="licenses"
			rows={ licenses }
			pagination={ pagination }
			menuOptions={ [
				{ label: 'New License', href: Routes.newLicense(), icon: NewIcon },
			] }
		>
			<LicensesTable />
		</IndexPageTemplate>
	)
}

export default LicencesIndex
