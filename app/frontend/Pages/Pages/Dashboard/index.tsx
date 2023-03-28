import React from 'react'
import { Heading, Page, Section } from '@/Components'
import Counts from './Counts'
import RecentActivityTable from './RecentActivityTable'

interface IDashboardProps {
	company: Schema.CompanyWithCounts
	activities: Schema.PublicActivityActivity[]
}

const Dashboard = ({ company, activities }: IDashboardProps) => {
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
		</Page>
	)
}

export default Dashboard
