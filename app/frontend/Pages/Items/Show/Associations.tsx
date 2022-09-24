import React from 'react'
import { Heading } from '@/Components'

interface IItemAssociationsProps {
	item: Schema.Item
}
const Associations = ({ item }: IItemAssociationsProps) => {
	return (
		<>
			<Heading order={ 3 }>Licenses</Heading>

			<ul>
				{ item.licenses && item.licenses.map(license => (
					<li key={ license.id }>{ license.name }</li>
				)) }
			</ul>
		</>
	)
}

export default Associations
