import React from 'react'
import { ShowPageAssociations } from '@/Features'
import { Routes } from '@/lib'
import { ShowAccessoryProps } from '.'

const Associations = ({ accessory }: ShowAccessoryProps) => {
	return <ShowPageAssociations assignToable={ accessory } checkinRoute={ Routes.checkinAccessory } />
}

export default Associations
