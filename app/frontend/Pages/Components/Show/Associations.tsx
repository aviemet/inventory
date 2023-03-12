import React from 'react'
import { ShowPageAssociations } from '@/Layouts/AppLayout/Components'
import { Routes } from '@/lib'

interface IComponentAssociationsProps {
	component: Schema.Component
}

const Associations = ({ component }: IComponentAssociationsProps) => {
	return <ShowPageAssociations assignToable={ component } checkinRoute={ Routes.checkinComponent } />
}

export default Associations
