import React from 'react'
import { Heading, History } from '@/Components'
import { IShowItemProps } from '.'

const ItemHistory = ({ item }: IShowItemProps) => {
	return (
		<>
			<Heading order={ 3 }>History</Heading>

			<History assignments={ item.assignments } activities={ item.activities } />
		</>
	)
}

export default ItemHistory
