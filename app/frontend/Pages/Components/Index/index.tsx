import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Features'
import { NewIcon } from '@/Components/Icons'
import ComponentsTable from '../Table'

interface IComponentsIndexProps {
	components: Schema.Item[]
	pagination: Schema.Pagination
}

const ComponentsIndex = ({ components, pagination }: IComponentsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Components"
			model="components"
			rows={ components }
			pagination={ pagination }
			deleteRoute={ Routes.components() }
			menuOptions={ [
				{ label: 'New Component', href: Routes.newComponent(), icon: NewIcon },
			] }
		>
			<ComponentsTable />
		</IndexPageTemplate>
	)
}

export default ComponentsIndex
