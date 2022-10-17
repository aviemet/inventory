import React from 'react'
import { Section, Menu, Flex, Heading, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import { EditIcon } from '@/Components/Icons'

interface IShowModelProps {
	model: Schema.Model
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const Show = ({ model }: IShowModelProps) => {
	const title = model.name ?? 'Item Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Model', href: Routes.models() },
			{ title: model.name! },
		] }>

			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Item href={ Routes.editModel(model) } icon={ <EditIcon /> }>
								Edit Model
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Flex>

				<Tabs urlControlled={ true } defaultValue={ tabs.details }>
					<Tabs.List>
						<Tabs.Tab value={ tabs.details }>Details</Tabs.Tab>
						<Tabs.Tab value={ tabs.history }>History</Tabs.Tab>
						<Tabs.Tab value={ tabs.associations }>Associations</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value="details">
						Details
					</Tabs.Panel>

					<Tabs.Panel value="history">
						History
					</Tabs.Panel>

					<Tabs.Panel value="associations">
						Associations
					</Tabs.Panel>
				</Tabs>


			</Section>
		</Page>
	)
}

export default Show
