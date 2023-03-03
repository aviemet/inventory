import React from 'react'
import { ShowPageAssociations } from '@/Layouts/AppLayout/Components'

interface IConsumableAssociationsProps {
	consumable: Schema.Consumable
}
const Associations = ({ consumable }: IConsumableAssociationsProps) => {
	return <ShowPageAssociations assignToable={ consumable } />
}

export default Associations
