import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section } from '@/Components'

interface IShowCompanyProps {
	company: Schema.Company
}

const Show = ({ company }: IShowCompanyProps) => {
	const title = company.name

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title }</h1>
			</Section>
		</>
	)
}

export default Show
