import React from 'react'
import { ShowPageAssociations } from '@/Layouts/AppLayout/Components'
import { Routes } from '@/lib'

interface ILicenseAssociationsProps {
	license: Schema.License
}

const Associations = ({ license }: ILicenseAssociationsProps) => {
	return <ShowPageAssociations assignToable={ license } checkinRoute={ Routes.checkinLicense } />
}

export default Associations
