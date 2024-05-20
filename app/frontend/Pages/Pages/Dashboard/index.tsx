import React from 'react'
import { Heading, Page, Section } from '@/Components'
import Counts from './Counts'
import RecentActivityTable from './RecentActivityTable'
import { TestResponseButton } from '@/Components/Button'

interface DashboardProps {
	company: Schema.CompaniesDashboard
	activities: Schema.ActivitiesDashboard[]
}

const Dashboard = ({ company, activities }: DashboardProps) => {
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
				<TestResponseButton endpoint='localhost:3000/api/companies'  />
			</Section>
		</Page>
	)
}

export default Dashboard
