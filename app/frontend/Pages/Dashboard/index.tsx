import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import { CurrencyInput } from '@/Components/Inputs'

const Dashboard = () => {
	return (
		<>
			<Head title="Dashboard"></Head>

			<Section>
				<h1>Dashboard!</h1>
				<CurrencyInput />
			</Section>
		</>
	)
}

export default Dashboard
