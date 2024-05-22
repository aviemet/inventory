import React from 'react'
import { ShowPageAssociations } from '@/Features'
import { ShowConsumableProps } from '.'

const Associations = ({ consumable }: ShowConsumableProps) => {
	return <ShowPageAssociations assignable={ consumable } />
}

export default Associations
