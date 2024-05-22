import React from 'react'
import { ShowPageAssociations } from '@/Features'
import { Routes } from '@/lib'
import { ShowAccessoryProps } from '.'

const Associations = ({ accessory }: ShowAccessoryProps) => {
	return <ShowPageAssociations assignable={ accessory } checkinRoute={ Routes.checkinAccessory } />
}

export default Associations
