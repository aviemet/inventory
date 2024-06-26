import React from 'react'
import { ShowPageAssociations } from '@/Features'
import { Routes } from '@/lib'
import { ShowLicenseProps } from '.'

const Associations = ({ license }: ShowLicenseProps) => {
	return <ShowPageAssociations assignable={ license } checkinRoute={ Routes.checkinLicense } />
}

export default Associations
