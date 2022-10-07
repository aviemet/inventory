import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Flex, Heading, Menu, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowLocationProps {
	location: Schema.Location
}

const Show = ({ location }: IShowLocationProps) => {
	const title = location.name

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Flex position="apart">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Item href={ Routes.editLocation(location.slug) }>
								Edit Location
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Flex>

			</Section>
		</>
	)
}

export default Show
