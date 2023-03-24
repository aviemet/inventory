import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import ModelsTable from '../Table'

interface IModelsIndexProps {
	models: Schema.Model[]
	pagination: Schema.Pagination
}

const ModelsIndex = ({ models, pagination }: IModelsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Models"
			model="models"
			rows={ models }
			pagination={ pagination }
			deleteRoute={ Routes.models() }
			menuOptions={ [
				{ label: 'New Model', href: Routes.newModel(), icon: NewIcon },
			] }
		>
			<ModelsTable />
		</IndexPageTemplate>
	)
}

export default ModelsIndex
