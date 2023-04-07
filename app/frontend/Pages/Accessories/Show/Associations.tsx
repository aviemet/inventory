import React from 'react'
import { ShowPageAssociations } from '@/Layouts/AppLayout/Components'
import { Routes } from '@/lib'

interface IAccessoryAssociationsProps {
	accessory: Schema.Accessory
}

const Associations = ({ accessory }: IAccessoryAssociationsProps) => {
	return <ShowPageAssociations assignToable={ accessory } checkinRoute={ Routes.checkinAccessory } />
}

export default Associations
