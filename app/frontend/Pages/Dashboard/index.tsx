import React from 'react'
import { Head } from '@inertiajs/inertia-react'

const Dashboard = ({ company }) => {
	console.log({ company })
	return (
		<>
			<Head title="Dashboard"></Head>

			<section className="container">
				<h1>Dashboard!</h1>
			</section>
		</>
	)
}

export default Dashboard
