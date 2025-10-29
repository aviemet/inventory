import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/features'
import { NewIcon } from '@/components/Icons'
import ComponentsTable from '../Table'

interface ComponentsIndexProps {
	components: Schema.Item[]
	pagination: Schema.Pagination
}

const ComponentsIndex = ({ components, pagination }: ComponentsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Components"
			model="components"
			rows={ components }
			pagination={ pagination }
			deleteRoute={ Routes.components() }
			menuOptions={ [
				{ label: 'New Component', href: Routes.newComponent(), icon: <NewIcon /> },
			] }
		>
			<ComponentsTable />
		</IndexPageTemplate>
	)
}

export default ComponentsIndex
