import React from 'react'
import { ShowPageAssociations } from '@/Layouts/AppLayout/Components'
import { Routes } from '@/lib'
import { IShowComponentProps } from '.'

const Associations = ({ component }: IShowComponentProps) => {
	return <ShowPageAssociations assignToable={ component } checkinRoute={ Routes.checkinComponent } />
}

export default Associations
