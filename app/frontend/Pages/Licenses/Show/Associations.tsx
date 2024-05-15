import React from 'react'
import { ShowPageAssociations } from '@/Features'
import { Routes } from '@/lib'
import { IShowLicenseProps } from '.'

const Associations = ({ license }: IShowLicenseProps) => {
	return <ShowPageAssociations assignToable={ license } checkinRoute={ Routes.checkinLicense } />
}

export default Associations
