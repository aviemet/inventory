import React from 'react'
import { Title, Page, Section } from '@/Components'
import Counts from './Counts'
import RecentActivityTable from './RecentActivityTable'

interface DashboardProps {
	company: Schema.CompaniesCounts
	activities: Schema.ActivitiesDashboard[]
}

const Dashboard = ({ company, activities }: DashboardProps) => {
	return (
		<Page title="Dashboard" breadcrumbs={ [
			{ href: '/dashboard', title: 'Dashboard' },
		] }>
			<Title mb="sm">Company Overview</Title>

			<Section>
				<Counts counts={ company.counts } />
			</Section>

			<Section>
				<Title order={ 2 }>Recent Activity</Title>
				<RecentActivityTable activities={ activities } />
			</Section>
		</Page>
	)
}

export default Dashboard
