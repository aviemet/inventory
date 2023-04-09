import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import LicensesTable from '../Table'

interface ILicensesIndexProps {
	licenses: Schema.LicensesIndex[]
	pagination: Schema.Pagination
}

const LicensesIndex = ({ licenses, pagination }: ILicensesIndexProps ) => {
	return (
		<IndexPageTemplate
			title="Licenses"
			model="licenses"
			rows={ licenses }
			pagination={ pagination }
			deleteRoute={ Routes.licenses() }
			menuOptions={ [
				{ label: 'New License', href: Routes.newLicense(), icon: NewIcon },
			] }
		>
			<LicensesTable />
		</IndexPageTemplate>
	)
}

export default LicensesIndex
