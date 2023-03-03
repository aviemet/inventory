import React from 'react'
import { ShowPageAssociations } from '@/Layouts/AppLayout/Components'

interface IAccessoryAssociationsProps {
	accessory: Schema.Accessory
}

const Associations = ({ accessory }: IAccessoryAssociationsProps) => {
	return <ShowPageAssociations assignToable={ accessory } />
}

export default Associations
