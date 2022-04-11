import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes } from '@/lib'
import * as Table from '@/Components/Table'

interface CompanyWithCounts extends Schema.Company {
	counts: {
		locations: number
		items: number
		accessories: number
		consumables: number
		components: number
		departments: number
		licenses: number
		contracts: number
		people: number
		vendors: number
		manufacturers: number
	}
}

const Index = ({ companies }: { companies: CompanyWithCounts[] }) => {

	console.log({ companies })

	return (
		<>
			<Head title="Companies"></Head>
			<section className="container">
				<h1 className="inline-block align-text-top md:align-middle">Companies</h1>


				<Table.Table scroll={ true }>
					<Table.Head>
						<Table.Row>
							<Table.Cell checkbox></Table.Cell>
							<Table.Cell>Name</Table.Cell>
							<Table.Cell>Locations</Table.Cell>
							<Table.Cell>Departments</Table.Cell>
							<Table.Cell>Assets</Table.Cell>
							<Table.Cell>People</Table.Cell>
							<Table.Cell className="table-column-fit text-center">Actions</Table.Cell>
						</Table.Row>
					</Table.Head>

					<Table.Body>
						{ companies.map(company => (
							<Table.Row key={ company.id }>
								<Table.Cell checkbox></Table.Cell>
								<Table.Cell>
									<Link href={ Routes.company(company.slug) }>{ company.name }</Link>
								</Table.Cell>
								<Table.Cell>{ company!.counts.locations }</Table.Cell>
								<Table.Cell>{ company!.counts.departments }</Table.Cell>
								<Table.Cell>{ company!.counts.items }</Table.Cell>
								<Table.Cell>{ company!.counts.people }</Table.Cell>
								<Table.Cell>
									<button>edit</button>
									<button>delete</button>
								</Table.Cell>
							</Table.Row>
						)) }
					</Table.Body>
				</Table.Table>
			</section>
		</>
	)
}

export default Index