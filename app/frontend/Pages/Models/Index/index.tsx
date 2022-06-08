import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Option } from '@/Components/Popover'
import { EditButton } from '@/Components/Button'
import {
	TableSection,
	TableTitleSection,
} from '@/Components/Layout/IndexPageComponents'

interface IModelsIndexProps {
	models: Schema.Model[]
	pagination: Schema.Pagination
}

const ModelsIndex = ({ models, pagination }: IModelsIndexProps) => {
	const title = 'Models'

	return (
		<>
			<Head title={ title }></Head>

			<TableSection>
				<Table.TableProvider
					selectable
					hideable
					model="models"
					rows={ models }
					pagination={ pagination }
				>

					<TableTitleSection
						title={ title }
						popover={
							<Popover>
								<Option href={ Routes.newPerson() }>
									Add New Model
								</Option>
							</Popover>
						}
					/>

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
											<EditButton href={ Routes.editModel(model.slug) } />
										</Table.Cell>
									</Table.Row>
								) } />
							</Table.Body>
						</Table.Table>
					</div>
					<Table.Pagination />
				</Table.TableProvider>
			</TableSection>
		</>
	)
}

export default ModelsIndex
