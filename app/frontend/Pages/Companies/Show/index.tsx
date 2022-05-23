import React from 'react'
import { Head } from '@inertiajs/inertia-react'

interface IShowCompanyProps {
	company: Schema.Company
}

const Show = ({ company }: IShowCompanyProps) => {
	const title = company.name

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title }</h1>
			</section>
		</>
	)
}

export default Show
