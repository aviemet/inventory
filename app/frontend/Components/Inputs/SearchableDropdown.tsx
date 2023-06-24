import React, { forwardRef, useCallback, useState } from 'react'
import { Select, type SelectProps } from '@mantine/core'
import Label from './Label'
import { router } from '@inertiajs/react'
import { coerceArray } from '@/lib'

export interface ISearchableDropdownProps extends Omit<SelectProps, 'data'> {
	options?: Array<Record<string, any>>
	getLabel?: (option: Record<string, any>) => any
	getValue?: (option: Record<string, any>) => string
	disabledOptions?: (label: string, value: string | number) => boolean
	onOpen?: () => void
	onChange?: (option: string|null) => void
	filterMatchKeys?: string[]
	fetchOnOpen?: string | ((setFetchedOptions: React.Dispatch<React.SetStateAction<any[]>>) => void)
	fetchOnSearch?: boolean
}

const SearchableDropdownComponent = forwardRef<HTMLInputElement, ISearchableDropdownProps>((
	{
		options = [],
		getLabel = option => option.name,
		getValue = option => String(option.id),
		disabledOptions,
		onSearchChange,
		onChange,
		filterMatchKeys,
		label,
		required,
		id,
		name,
		searchable = true,
		clearable = true,
		fetchOnOpen,
		fetchOnSearch = false,
		...props
	},
	ref,
) => {
	const [fetchedOptions, setFetchedOptions] = useState<any[]>(options)

	const inputId = id || name

	const data = useCallback(() => {
		let iterableOptions = options
		if(fetchOnOpen && typeof fetchOnOpen === 'function') {
			iterableOptions = fetchedOptions
		}

		return iterableOptions.map(option => {
			const optionPart = {
				label: getLabel(option),
				value: getValue(option),
				disabled: false,
			}

			if(disabledOptions) {
				optionPart.disabled = disabledOptions(optionPart.label, optionPart.value)
			}

			return optionPart
		})
	}, [options, fetchedOptions])

	const fetchNewRecords = (query?: string) => {
		if(!fetchOnOpen) return

		if(typeof fetchOnOpen === 'string') {
			router.reload({ only: coerceArray(fetchOnOpen) })
		} else if(typeof fetchOnOpen === 'function') {
			fetchOnOpen(setFetchedOptions)
		}
	}

	const handleChange = (value: string) => {
		if(!onChange) return

		if(fetchOnOpen && typeof fetchOnOpen === 'function' && value !== undefined) {
			onChange(fetchedOptions.find(el => String(el.id) === String(value)) || [])
		} else {
			onChange(value)
		}
	}

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<Select
				ref={ ref }
				id={ inputId }
				name={ name }
				searchable={ searchable }
				clearable={ clearable }
				size="md"
				data={ data() }
				required={ required }
				maxDropdownHeight={ 400 }
				nothingFound="No Results"
				onDropdownOpen={ fetchNewRecords }
				onChange={ handleChange }
				{ ...props }
			/>
		</>
	)
})

export default React.memo(SearchableDropdownComponent)
