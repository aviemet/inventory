import React, { useState } from 'react'
import { Group, Heading, Page, Section } from '@/Components'
import Counts from './Counts'
import RecentActivityTable from './RecentActivityTable'
import { Textarea, TextInput } from '@/Components/Inputs'
import { Form, FormConsumer, Checkbox } from '@/Components/Form'

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

			</Section>

			<Section>
				<Form to="/" data={ { languages: [] } }>
					<FormConsumer>{ ({ data }) => {
						console.log({ data })
						return <></>
					} }</FormConsumer>
					{ /* <Checkbox.Group
						name="languages"
						value={ languages }
						onChange={ handleLanguageChange }
						label="Languages"
					> */ }
					<Group mt="xs">
						<Checkbox name="react" label="React" />
						<Checkbox name="svelte" label="Svelte" />
						<Checkbox name="ng" label="Angular" />
						<Checkbox name="vue" label="Vue" />
					</Group>
					{ /* </Checkbox.Group> */ }
				</Form>
			</Section>
		</Page>
	)
}

export default Dashboard
