import React from 'react'
import { Heading, History } from '@/Components'

interface IItemHistoryProps {
	item: Schema.Item
}

const ItemHistory = ({ item }: IItemHistoryProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ item.assignments } audits={ item.audits } />
		</>
	)
}

export default ItemHistory
