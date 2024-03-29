import React from 'react'
import { Section } from '@/Components'
import { NewIcon } from '@/Components/Icons'
import ShowPageTableTemplate from '@/Layouts/AppLayout/Components/ShowPageTableTemplate'
import { Routes } from '@/lib'
import ItemsTable from '@/Pages/Items/Table'

interface IDetailsProps {
	department: Schema.Department
	items: PaginatedModel<Schema.Item[]>
}

const Details = ({ department, items }: IDetailsProps) => {
	return (
		<Section>
			<ShowPageTableTemplate
				title={ `${department.name} Assets` }
				model="items"
				rows={ items?.data }
				pagination={ items?.pagination }
				menuOptions={ [
					{ label: 'New Asset', href: Routes.newItem(), icon: NewIcon },
				] }
			>
				<ItemsTable wrapper={ false } />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
