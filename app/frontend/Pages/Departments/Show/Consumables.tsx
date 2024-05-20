import React from 'react'
import { Section } from '@/Components'
import { NewIcon } from '@/Components/Icons'
import ShowPageTableTemplate from '@/Features/ShowPageTableTemplate'
import { Routes } from '@/lib'
import ConsumablesTable from '@/Pages/Consumables/Table'
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
					{ label: 'New Consumable', href: Routes.newConsumable(), icon: NewIcon },
				] }
			>
				<ConsumablesTable wrapper={ false } />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
