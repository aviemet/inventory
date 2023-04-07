import React from 'react'
import { Section } from '@/Components'
import { NewIcon } from '@/Components/Icons'
import ShowPageTableTemplate from '@/Layouts/AppLayout/Components/ShowPageTableTemplate'
import { Routes } from '@/lib'
import LicensesTable from '@/Pages/Licenses/Table'

interface IDetailsProps {
	department: Schema.Department
	licenses: PaginatedModel<Schema.License[]>
}

const Details = ({ department, licenses }: IDetailsProps) => {
	return (
		<Section>
			<ShowPageTableTemplate
				title={ `${department.name} Licenses` }
				model="licenses"
				rows={ licenses?.data }
				pagination={ licenses?.pagination }
				menuOptions={ [
					{ label: 'New License', href: Routes.newLicense(), icon: NewIcon },
				] }
			>
				<LicensesTable wrapper={ false } />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
