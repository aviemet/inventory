import React from 'react'
import { Section } from '@/Components'
import { NewIcon } from '@/Components/Icons'
import ShowPageTableTemplate from '@/Features/ShowPageTableTemplate'
import { Routes } from '@/lib'
import LicensesTable from '@/Pages/Licenses/Table'
import { type PaginatedModel } from '@/types/PaginatedModel'

interface DetailsProps {
	department: Schema.Department
	licenses: PaginatedModel<Schema.License[]>
}

const Details = ({ department, licenses }: DetailsProps) => {
	return (
		<Section>
			<ShowPageTableTemplate
				title={ `${department.name} Licenses` }
				model="licenses"
				rows={ licenses?.data }
				pagination={ licenses?.pagination }
				menuOptions={ [
					{ label: 'New License', href: Routes.newLicense(), icon: <NewIcon /> },
				] }
			>
				<LicensesTable wrapper={ false } />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
