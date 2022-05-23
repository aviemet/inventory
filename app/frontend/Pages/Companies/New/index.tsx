import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import CompanyForm from '../Form'
import { Routes } from '@/lib'

const NewCompany = () => {
	const title = 'New Company'

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title }</h1>

				<CompanyForm to={ Routes.companies() } company={ { name: '' } } />
			</section>
		</>
	)
}

export default NewCompany
