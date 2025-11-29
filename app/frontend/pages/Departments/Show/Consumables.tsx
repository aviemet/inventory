import React from 'react'
import { Section } from '@/components'
import { NewIcon } from '@/components/Icons'
import ShowPageTableTemplate from '@/features/ShowPageTableTemplate'
import { Routes } from '@/lib'
import ConsumablesTable from '@/pages/Consumables/Table'
import { type PaginatedModel } from '@/types/PaginatedModel'

interface DetailsProps {
	department: Schema.Department
	consumables: PaginatedModel<Schema.Consumable[]>
}

const Details = ({ department, consumables }: DetailsProps) => {
	return (
		<Section>
			<ShowPageTableTemplate
				title={ `${department.name} Consumables` }
				model="consumables"
				rows={ consumables?.data }
				pagination={ consumables?.pagination }
				menuOptions={ [
					{ label: 'New Consumable', href: Routes.newConsumable(), icon: <NewIcon /> },
				] }
			>
				<ConsumablesTable wrapper={ false } />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
