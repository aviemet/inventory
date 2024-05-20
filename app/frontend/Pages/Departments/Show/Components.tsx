import React from 'react'
import { Section } from '@/Components'
import { NewIcon } from '@/Components/Icons'
import ShowPageTableTemplate from '@/Features/ShowPageTableTemplate'
import { Routes } from '@/lib'
import ComponentsTable from '@/Pages/Components/Table'
import { type PaginatedModel } from '@/types/PaginatedModel'

interface DetailsProps {
	department: Schema.Department
	components: PaginatedModel<Schema.Component[]>
}

const Details = ({ department, components }: DetailsProps) => {
	return (
		<Section>
			<ShowPageTableTemplate
				title={ `${department.name} Components` }
				model="components"
				rows={ components?.data }
				pagination={ components?.pagination }
				menuOptions={ [
					{ label: 'New Component', href: Routes.newComponent(), icon: NewIcon },
				] }
			>
				<ComponentsTable wrapper={ false } />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
