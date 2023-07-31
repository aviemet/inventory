import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { isEmpty } from 'lodash'
import { getAssetsAsOptions } from '@/queries/assets'
import { inFormContext } from '@/lib'
import { type IAsyncDropdown } from '.'

interface IAssetsDropdown extends IAsyncDropdown<Schema.AssetsOptions> {}

const AssetsDropdown = forwardRef<HTMLInputElement, IAssetsDropdown>((
	{ label = 'Asset', name = 'asset_id', initialData = [], ...props },
	ref,
) => {
	const { data, isStale, refetch } = getAssetsAsOptions({
		enabled: false,
		initialData,
	})

	const commonProps = {
		ref,
		label,
		name,
		options: !data ? [] : data.map(asset => ({
			label: asset.name,
			value: String(asset.id),
		})),
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		searchable: true,
		clearable: true,
		...props,
	}

	if(inFormContext()) {
		return <FormSelect { ...commonProps } />
	}

	return <InputSelect { ...commonProps } />
})

export default AssetsDropdown

