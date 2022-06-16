import React from 'react'
import { Head } from '@inertiajs/inertia-react'

import { Accordion } from '@mantine/core'

const Dashboard = () => {
	return (
		<>
			<Head title="Dashboard"></Head>

			<section className="container">
				<h1>Dashboard!</h1>

				<Accordion iconPosition="right" initialItem={ 0 }>
					<Accordion.Item label="Hardware">
						<ul>
							<li>Option1</li>
							<li>Option2</li>
							<li>Option3</li>
						</ul>
					</Accordion.Item>
				</Accordion>
			</section>
		</>
	)
}

export default Dashboard
