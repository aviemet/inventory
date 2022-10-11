import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Breadcrumbs, Section } from '@/Components'
import { breadcrumbs } from '../utils'

interface IShowCompanyProps {
	company: Schema.Company
}

const Show = ({ company }: IShowCompanyProps) => {
	const title = company.name

	return (
		<>
			<Head title={ title }></Head>

			<Breadcrumbs>{ breadcrumbs.show(company) }</Breadcrumbs>

			<Section>
				<h1>{ title }</h1>
			</Section>
		</>
	)
}

export default Show
