import React from 'react'
import { Section } from '@/Components'
import { NewIcon } from '@/Components/Icons'
import ShowPageTableTemplate from '@/Layouts/AppLayout/Components/ShowPageTableTemplate'
import { Routes } from '@/lib'
import ConsumablesTable from '@/Pages/Consumables/Table'

interface IDetailsProps {
	department: Schema.Department
	consumables: PaginatedModel<Schema.Consumable[]>
}

const Details = ({ department, consumables }: IDetailsProps) => {
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
