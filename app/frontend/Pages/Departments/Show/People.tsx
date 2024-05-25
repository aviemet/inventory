import React from 'react'
import { Section } from '@/Components'
import { NewIcon } from '@/Components/Icons'
import ShowPageTableTemplate from '@/Features/ShowPageTableTemplate'
import { Routes } from '@/lib'
import PeopleTable from '@/Pages/People/Table'
import { type PaginatedModel } from '@/types/PaginatedModel'

interface DetailsProps {
	department: Schema.Department
	people: PaginatedModel<Schema.Person[]>
}

const Details = ({ department, people }: DetailsProps) => {
	return (
		<Section>
			<ShowPageTableTemplate
				title={ `${department.name} People` }
				model="people"
				rows={ people?.data }
				pagination={ people?.pagination }
				menuOptions={ [
					{ label: 'New Person', href: Routes.newPerson(), icon: <NewIcon /> },
				] }
			>
				<PeopleTable wrapper={ false } />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
