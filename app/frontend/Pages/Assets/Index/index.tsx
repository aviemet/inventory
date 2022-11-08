import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import AssetTable from '../Table'

interface IAssetsIndexProps {
	assets: Schema.Asset[]
	pagination: Schema.Pagination
}

const AssetsIndex = ({ assets, pagination }: IAssetsIndexProps) => {
	const title = 'Asset Assets'

	console.log({ assets })

	return (
		<Page title={ title }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="assets"
					rows={ assets }
					pagination={ pagination }
				>
					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Asset', href: Routes.newAsset(), icon: NewIcon },
					] }>
						<Table.SearchInput />
					</TableTitleSection>

					<AssetTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default AssetsIndex
