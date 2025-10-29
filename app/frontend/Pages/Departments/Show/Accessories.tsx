import React from 'react'
import { Section } from '@/components'
import { NewIcon } from '@/components/Icons'
import ShowPageTableTemplate from '@/features/ShowPageTableTemplate'
import { Routes } from '@/lib'
import AccessoriesTable from '@/Pages/Accessories/Table'
import { type PaginatedModel } from '@/types/PaginatedModel'

interface DetailsProps {
	department: Schema.Department
	accessories: PaginatedModel<Schema.Accessory[]>
}

const Details = ({ department, accessories }: DetailsProps) => {
	return (
		<Section>
			<ShowPageTableTemplate
				title={ `${department.name} Accessories` }
				model="accessories"
				rows={ accessories?.data }
				pagination={ accessories?.pagination }
				menuOptions={ [
					{ label: 'New Accessory', href: Routes.newAccessory(), icon: <NewIcon /> },
				] }
			>
				<AccessoriesTable wrapper={ false } />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
