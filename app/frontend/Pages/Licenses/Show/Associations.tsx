import React from 'react'
import { ShowPageAssociations } from '@/Layouts/AppLayout/Components'

interface ILicenseAssociationsProps {
	license: Schema.License
}

const Associations = ({ license }: ILicenseAssociationsProps) => {
	return <ShowPageAssociations assignToable={ license } />
}

export default Associations
