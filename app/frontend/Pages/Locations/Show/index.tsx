import React from 'react'
import { Flex, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowLocationProps {
	location: Schema.Location
}

const Show = ({ location }: IShowLocationProps) => {
	const title = location.name

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Locations', href: Routes.locations() },
			{ title: location.name! },
		] }>
			<Section>
				<Flex position="apart">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editLocation(location.slug) }>
								Edit Location
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Flex>

			</Section>
		</Page>
	)
}

export default Show
