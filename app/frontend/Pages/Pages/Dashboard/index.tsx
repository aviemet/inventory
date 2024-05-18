import React, { useState } from 'react'
import { Group, Heading, Page, Section } from '@/Components'
import Counts from './Counts'
import RecentActivityTable from './RecentActivityTable'
import { Textarea, TextInput, Checkbox } from '@/Components/Inputs'
import { Form  } from '@/Components/Form'

interface IDashboardProps {
	company: Schema.CompaniesDashboard
	activities: Schema.ActivitiesDashboard[]
}

const Dashboard = ({ company, activities }: IDashboardProps) => {
	const [languages, setLanguages] = useState<string[]>([])

	const handleLanguageChange = (langs: string[]) => {
		setLanguages(langs)
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
				<Form to="/" data={ { languages: [] } }>
					<Checkbox.Group
						value={ languages }
						onChange={ handleLanguageChange }
						label="Languages"
					>
						<Group mt="xs">
							<Checkbox value="react" label="React" />
							<Checkbox value="svelte" label="Svelte" />
							<Checkbox value="ng" label="Angular" />
							<Checkbox value="vue" label="Vue" />
						</Group>
					</Checkbox.Group>
				</Form>
			</Section>
		</Page>
	)
}

export default Dashboard
