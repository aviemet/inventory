import React from 'react'
import { ShowPageAssociations } from '@/Features'
import { IShowConsumableProps } from '.'

const Associations = ({ consumable }: IShowConsumableProps) => {
	return <ShowPageAssociations assignToable={ consumable } />
}

export default Associations
