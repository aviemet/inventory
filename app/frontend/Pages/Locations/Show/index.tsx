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

					<Menu>
						<Menu.Item href={ Routes.editLocation(location) }>
								Edit Location
						</Menu.Item>

					</Menu>
				</Flex>

			</Section>
		</>
	)
}

export default Show
