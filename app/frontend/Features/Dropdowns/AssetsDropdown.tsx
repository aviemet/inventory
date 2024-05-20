import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { isEmpty } from 'lodash'
import { useGetAssetsAsOptions } from '@/queries/assets'
import { useInFormContext } from '@/lib'
import { type AsyncDropdown } from '.'

interface AssetsDropdownProps extends AsyncDropdown<Schema.AssetsOptions> {}

const AssetsDropdown = forwardRef<HTMLInputElement, AssetsDropdownProps>((
	{ label = 'Asset', name = 'asset_id', initialData = [], value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetAssetsAsOptions({
		enabled: value !== undefined,
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
		value,
		...props,
	}

	if(useInFormContext()) {
		return <FormSelect { ...commonProps } />
	}

	return <InputSelect { ...commonProps } />
})

export default AssetsDropdown
