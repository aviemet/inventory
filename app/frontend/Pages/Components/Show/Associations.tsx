import React from 'react'
import { ShowPageAssociations } from '@/Layouts/AppLayout/Components'

interface IComponentAssociationsProps {
	component: Schema.Component
}

const Associations = ({ component }: IComponentAssociationsProps) => {
	return <ShowPageAssociations assignToable={ component } />
}

export default Associations
