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
	console.log({ location: window.location })
	return (
		<>
			<Head title="Companies"></Head>
			<section className="h-full flex flex-col">
				<h1 className="inline-block align-text-top md:align-middle">Companies</h1>

				<Table.Table scroll selectable rows={ companies }>
					<Table.Head>
						<Table.Row>
							<Table.Cell sort="name">Name</Table.Cell>
							<Table.Cell sort="locations">Locations</Table.Cell>
							<Table.Cell sort="departments">Departments</Table.Cell>
							<Table.Cell sort="items">Assets</Table.Cell>
							<Table.Cell sort="people">People</Table.Cell>
							<Table.Cell className="text-right">Actions</Table.Cell>
						</Table.Row>
					</Table.Head>

					<Table.Body>
						<Table.RowIterator render={ company => (
							<Table.Row key={ company.id }>
								<Table.Cell>
									<Link href={ Routes.company(company.slug) }>{ company.name }</Link>
								</Table.Cell>
								<Table.Cell>{ company!.counts.locations }</Table.Cell>
								<Table.Cell>{ company!.counts.departments }</Table.Cell>
								<Table.Cell>{ company!.counts.items }</Table.Cell>
								<Table.Cell>{ company!.counts.people }</Table.Cell>
								<Table.Cell className="table-column-fit text-right">
									<button>edit</button>
									<button>delete</button>
								</Table.Cell>
							</Table.Row>
						) } />
					</Table.Body>
				</Table.Table>
			</section>
		</>
	)
}

export default Index
