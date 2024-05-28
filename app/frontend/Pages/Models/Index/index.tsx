import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Features'
import { NewIcon } from '@/Components/Icons'
import ModelsTable from '../Table'

interface ModelsIndexProps {
	models: Schema.ModelsIndex[]
	pagination: Schema.Pagination
}

const ModelsIndex = ({ models, pagination }: ModelsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Models"
			model="models"
			rows={ models }
			pagination={ pagination }
			deleteRoute={ Routes.models() }
			menuOptions={ [
				{ label: 'New Model', href: Routes.newModel(), icon: <NewIcon /> },
			] }
		>
			<ModelsTable />
		</IndexPageTemplate>
	)
}

export default ModelsIndex
