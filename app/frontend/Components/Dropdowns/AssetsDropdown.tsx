import React, { forwardRef } from 'react'
import { SearchableDropdown as FormDropdown } from '@/Components/Form'
import { SearchableDropdown as InputDropdown } from '@/Components/Inputs'
import { isEmpty } from 'lodash'
import { getAssetsAsOptions } from '@/queries/assets'
import { inFormContext } from '@/lib'
import { type IAsyncDropdown } from '.'

interface IAssetsDropdown extends IAsyncDropdown<Schema.AssetsOptions> {}

const AssetsDropdown = forwardRef<HTMLInputElement, IAssetsDropdown>((
	{ label = 'Asset', name = 'asset_id', initialData, ...props },
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
		options: data,
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		...props,
	}

	if(inFormContext()) {
		return <FormDropdown { ...commonProps } />
	}

	return <InputDropdown { ...commonProps } />
})

export default AssetsDropdown

