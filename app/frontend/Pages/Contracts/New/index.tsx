import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import ContractForm from '../Form'
import { Routes } from '@/lib'

interface INewContractProps {
	contract: Schema.Contract
	vendors: Schema.Vendor[]
	categories: Schema.Category[]
}

const NewContract = ({ ...data }: INewContractProps) => {
	const title = 'New Contract'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title } for { user.active_company!.name }</h1>

				<ContractForm to={ Routes.contracts() } { ...data } />
			</Section>
		</>
	)
}

export default NewContract
