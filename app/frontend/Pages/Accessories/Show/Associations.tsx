import React from 'react'
import { ShowPageAssociations } from '@/Features'
import { Routes } from '@/lib'
import { IShowAccessoryProps } from '.'

const Associations = ({ accessory }: IShowAccessoryProps) => {
	return <ShowPageAssociations assignToable={ accessory } checkinRoute={ Routes.checkinAccessory } />
}

export default Associations
