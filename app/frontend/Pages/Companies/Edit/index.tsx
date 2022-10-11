import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Breadcrumbs, Section } from '@/Components'
import CompanyForm from '../Form'
import { Routes } from '@/lib'
import { breadcrumbs } from '../utils'

const EditCompany = ({ company }: { company: Schema.Company}) => {
	const title = 'Edit Company'

	return (
		<>
			<Head title={ title }></Head>

			<Breadcrumbs>{ breadcrumbs.edit(company) }</Breadcrumbs>

			<Section>
				<h1>{ title }</h1>

				<CompanyForm to={ Routes.companies() } company={ company } />
			</Section>
		</>
	)
}

export default EditCompany
