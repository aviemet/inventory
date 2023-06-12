import React from 'react'
import { History } from '@/Components'
import { IShowItemProps } from '.'

const ItemHistory = ({ item }: IShowItemProps) => {
	return (
		<>
			<History assignments={ item.assignments } activities={ item.activities } />
		</>
	)
}

export default ItemHistory
