import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section } from '@/Components'

const Dashboard = ({ people }: { people: Schema.Person[]}) => {
	return (
		<>
			<Head title="Dashboard"></Head>

			<Section>
				<h1>Dashboard!</h1>
			</Section>
		</>
	)
}

export default Dashboard
