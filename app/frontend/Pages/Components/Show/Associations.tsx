import React from 'react'
import { ShowPageAssociations } from '@/Features'
import { Routes } from '@/lib'
import { ShowComponentProps } from '.'

const Associations = ({ component }: ShowComponentProps) => {
	return <ShowPageAssociations assignable={ component } checkinRoute={ Routes.checkinComponent } />
}

export default Associations
