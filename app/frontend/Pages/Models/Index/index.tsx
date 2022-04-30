import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Divider, Option } from '@/Components/Popover'
import { MdEdit } from 'react-icons/md'

interface IModelsIndexProps {
	models: Schema.Model[]
	pagination: Schema.Pagination
}

const ModelsIndex = ({ models, pagination }: IModelsIndexProps) => {
	const title = 'Models'

	return (
		<>
			<Head title={ title }></Head>

			<section className="flex flex-col h-full">
				<Table.TableProvider selectable rows={ models } pagination={ pagination }>
					<div className="flex items-center justify-between">
						<h1 className="md:inline-block md:flex-1 md:align-middle align-text-top">{ title }</h1>
						<div className="md:flex-1 flex">
							<Table.SearchInput model="items" />

							<div className="inline-block">
								<Popover>
									<Option>
										<Link href={ Routes.newPerson() } key="new_person">Add New Model</Link>
									</Option>
								</Popover>
							</div>

						</div>
					</div>

					<div className="scroll-content h-full">
						<Table.Table fixed={ false }>
							<Table.Head>
								<Table.Row>
									<Table.Cell sort="name">Name</Table.Cell>
									<Table.Cell sort="model_number">Model #</Table.Cell>
									<Table.Cell sort="category.name">Category</Table.Cell>
									<Table.Cell sort="manufacturer.name">Manufacturer</Table.Cell>
									<Table.Cell className="text-right">Actions</Table.Cell>
								</Table.Row>
							</Table.Head>

							<Table.Body>
								<Table.RowIterator render={ model => (
									<Table.Row key={ model.id }>
										<Table.Cell nowrap>
											<Link href={ Routes.model(model.slug) }>{ model.name }</Link>
										</Table.Cell>

										<Table.Cell nowrap>
											<Link href={ Routes.model(model.slug) }>{ model.model_number }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.categories(model.category.slug) }>
												{ model.category.name }
											</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.manufacturer(model.manufacturer.slug) }>
												{ model.manufacturer.name }
											</Link>
										</Table.Cell>

										<Table.Cell className="table-column-fit text-right">
											<Link as="button" href={ Routes.editModel(model.slug) }><MdEdit /></Link>
										</Table.Cell>
									</Table.Row>
								) } />
							</Table.Body>
						</Table.Table>
					</div>
					<Table.Pagination />
				</Table.TableProvider>
			</section>
		</>
	)
}

export default ModelsIndex
