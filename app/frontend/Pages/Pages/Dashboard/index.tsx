import React from 'react'
import { Heading, Page, Section } from '@/Components'
import Counts from './Counts'
import RecentActivityTable from './RecentActivityTable'
import { SearchableDropdown } from '@/Components/Inputs'
import { getModelsAsOptions } from '@/queries/models'

interface IDashboardProps {
	company: Schema.CompaniesDashboard
	activities: Schema.ActivitiesDashboard[]
}

const Dashboard = ({ company, activities }: IDashboardProps) => {
	const { data, refetch } = getModelsAsOptions({ enabled: false })

	const fetchModels = (setOptions: React.Dispatch<React.SetStateAction<Schema.ModelsOptions[]>>) => {
		refetch().then(({ data }) => {
			console.log({ data })
			setOptions(data.data)
		})
	}

	return (
		<Page title="Dashboard" breadcrumbs={ [
			{ href: '/dashboard', title: 'Dashboard' },
		] }>
			<Section>
				<Counts counts={ company.counts } />
			</Section>

			<Section>
				<Heading order={ 2 }>Recent Activity</Heading>
				<RecentActivityTable activities={ activities } />
			</Section>

			<Section>
				<SearchableDropdown
					fetchOnOpen={ fetchModels }
				/>
			</Section>
		</Page>
	)
}

export default Dashboard
