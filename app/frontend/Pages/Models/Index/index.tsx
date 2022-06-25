import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { NewIcon } from '@/Components/Icons'

interface IModelsIndexProps {
	models: Schema.Model[]
	pagination: Schema.Pagination
}

const ModelsIndex = ({ models, pagination }: IModelsIndexProps) => {
	const title = 'Models'

	return (
		<>
			<Head title={ title }></Head>

			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="models"
					rows={ models }
					pagination={ pagination }
				>

					<Table.Title
						title={ title }
						menuOptions={ [
							{ label: 'New Model', href: Routes.newModel(), icon: NewIcon },
						] }
					/>


					<Table>
						<Table.Head>
							<Table.Row>
								<Table.Cell sort="name">Name</Table.Cell>
								<Table.Cell sort="model_number">Model #</Table.Cell>
								<Table.Cell sort="category.name">Category</Table.Cell>
								<Table.Cell sort="manufacturer.name">Manufacturer</Table.Cell>
								<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
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

									<Table.Cell className="table-column-fit">
										<EditButton href={ Routes.editModel(model.slug) } />
									</Table.Cell>
								</Table.Row>
							) } />
						</Table.Body>
					</Table>

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</>
	)
}

export default ModelsIndex
