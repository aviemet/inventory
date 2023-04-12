import React from 'react'
import { ShowPageAssociations } from '@/Layouts/AppLayout/Components'
import { IShowConsumableProps } from '.'

const Associations = ({ consumable }: IShowConsumableProps) => {
	return <ShowPageAssociations assignToable={ consumable } />
}

export default Associations
