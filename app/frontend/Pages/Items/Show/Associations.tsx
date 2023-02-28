import React from 'react'
import { Heading } from '@/Components'

interface IItemAssociationsProps {
	item: Schema.Item
}

const Associations = ({ item }: IItemAssociationsProps) => {
	return (
		<>
			{ item.items && <>
				<Heading order={ 3 }>Licenses</Heading>

				<ul>
					{ item.items.map(item => (
						<li key={ item.id }>{ item.name }</li>
					)) }
				</ul>
			</> }

			{ item.accessories && <>
				<Heading order={ 3 }>Licenses</Heading>

				<ul>
					{ item.accessories.map(accessory => (
						<li key={ accessory.id }>{ accessory.name }</li>
					)) }
				</ul>
			</> }

			{ item.consumables && <>
				<Heading order={ 3 }>Licenses</Heading>

				<ul>
					{ item.consumables.map(consumable => (
						<li key={ consumable.id }>{ consumable.name }</li>
					)) }
				</ul>
			</> }

			{ item.licenses && <>
				<Heading order={ 3 }>Licenses</Heading>

				<ul>
					{ item.licenses.map(license => (
						<li key={ license.id }>{ license.name }</li>
					)) }
				</ul>
			</> }
		</>
	)
}

export default Associations
