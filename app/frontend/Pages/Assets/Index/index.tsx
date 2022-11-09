import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import AssetTable from '../Table'

interface IAssetsIndexProps {
	assets: Schema.Asset[]
	pagination: Schema.Pagination
}

const AssetsIndex = ({ assets, pagination }: IAssetsIndexProps) => {
	return (
		<IndexPageTemplate
			title="All Assets"
			model="assets"
			rows={ assets }
			pagination={ pagination }
			menuOptions={ [
				{ label: 'New Asset', href: Routes.newAsset(), icon: NewIcon },
			] }
		>
			<AssetTable />
		</IndexPageTemplate>
	)
}

export default AssetsIndex
