import React from 'react'
import { Box, Heading, Link } from '@/Components'
import AssignmentLink from './AssignmentLink'
import { Routes } from '@/lib'
import { IShowItemProps } from '.'

const Associations = ({ item }: IShowItemProps) => {
	return (
		<Box>
			{ item.assigned && <Box mt={ 16 }>Assigned To: <AssignmentLink item={ item } /> </Box> }

			{ (Array.isArray(item.items) && item.items.length > 0) && <Box mt={ 16 }>
				<Heading order={ 3 }>Items</Heading>

				<ul>
					{ item.items.map(item => (
						<Link key={ item.id } href={ Routes.item(item.id) }><li key={ item.id }>{ item.name }</li></Link>
					)) }
				</ul>
			</Box> }

			{ (Array.isArray(item.accessories) && item.accessories.length > 0) && <Box mt={ 16 }>
				<Heading order={ 3 }>Accessories</Heading>

				<ul>
					{ item.accessories.map(accessory => (
						<Link key={ accessory.id } href={ Routes.accessory(accessory.id) }><li key={ accessory.id }>{ accessory.name }</li></Link>
					)) }
				</ul>
			</Box> }

			{ (Array.isArray(item.consumables) && item.consumables.length > 0) && <Box mt={ 16 }>
				<Heading order={ 3 }>Consumables</Heading>

				<ul>
					{ item.consumables.map(consumable => (
						<Link key={ consumable.id } href={ Routes.consumable(consumable.id) }><li key={ consumable.id }>{ consumable.name }</li></Link>
					)) }
				</ul>
			</Box> }

			{ (Array.isArray(item.licenses) && item.licenses.length > 0) && <Box mt={ 16 }>
				<Heading order={ 3 }>Licenses</Heading>

				<ul>
					{ item.licenses.map(license => (
						<Link key={ license.id } href={ Routes.license(license.id) }><li key={ license.id }>{ license.name }</li></Link>
					)) }
				</ul>
			</Box> }
		</Box>
	)
}

export default Associations
