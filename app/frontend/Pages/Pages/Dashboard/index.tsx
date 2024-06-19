import React from 'react'
import { Heading, Page, Section } from '@/Components'
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
			<Heading mb="sm">Company Overview</Heading>

			<Section>
				<Counts counts={ company.counts } />
			</Section>

			<Section>
				<Heading order={ 2 }>Recent Activity</Heading>
				<RecentActivityTable activities={ activities } />
			</Section>
		</Page>
	)
}

export default Dashboard
