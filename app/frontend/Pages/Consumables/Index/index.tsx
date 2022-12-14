import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import ConsumablesTable from '../Table'

interface IConsumablesIndexProps {
	consumables: Schema.Consumable[]
	pagination: Schema.Pagination
}

const ConsumablesIndex = ({ consumables, pagination }: IConsumablesIndexProps) => {
	return (
		<IndexPageTemplate
			title="Consumables"
			model="consumables"
			rows={ consumables }
			pagination={ pagination }
			menuOptions={ [
				{ label: 'New Consumable', href: Routes.newConsumable(), icon: NewIcon },
			] }
		>
			<ConsumablesTable />
		</IndexPageTemplate>
	)
}

export default ConsumablesIndex
