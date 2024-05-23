import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { isEmpty } from 'lodash'
import { useGetAssetsAsOptions } from '@/queries/assets'
import { type FormAsyncDropdown } from '.'

interface AssetsDropdownProps extends Omit<FormAsyncDropdown<Schema.AssetsOptions>, 'name'> {
	name?: string
}

const AssetsDropdown = forwardRef<HTMLInputElement, AssetsDropdownProps>((
	{ label = 'Asset', name = 'asset_id', initialData = [], value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetAssetsAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return <FormSelect
		ref={ ref }
		name={ name }
		label={ label }
		options={ !data ? [] : data.map(asset => ({
			label: asset.name,
			value: String(asset.id),
		})) }
		onDropdownOpen={ () => {
			if(isEmpty(data) || isStale) refetch()
		} }
		searchable
		clearable
		value={ value }
		{ ...props }
	/>
})

export default AssetsDropdown
