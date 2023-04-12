import React from 'react'
import { Section } from '@/Components'
import { NewIcon } from '@/Components/Icons'
import ShowPageTableTemplate from '@/Layouts/AppLayout/Components/ShowPageTableTemplate'
import { Routes } from '@/lib'
import ComponentsTable from '@/Pages/Components/Table'

interface IDetailsProps {
	department: Schema.Department
	components: PaginatedModel<Schema.Component[]>
}

const Details = ({ department, components }: IDetailsProps) => {
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
