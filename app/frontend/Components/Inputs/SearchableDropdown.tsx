import React, { forwardRef, useCallback } from 'react'
import { Select, type SelectProps } from '@mantine/core'
import Label from './Label'
import { router } from '@inertiajs/react'
import { coerceArray } from '@/lib'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface ISearchableDropdownProps extends Omit<SelectProps, 'data'>, IInputProps {
	options?: Array<Record<string, any>>
	getLabel?: (option: Record<string, any>) => any
	getValue?: (option: Record<string, any>) => string
	disabledOptions?: (label: string, value: string | number) => boolean
	onOpen?: () => void
	fetchOnOpen?: string
}

const SearchableDropdownComponent = forwardRef<HTMLInputElement, ISearchableDropdownProps>((
	{
		options = [],
		getLabel = option => option.name,
		getValue = option => String(option.id),
		disabledOptions,
		label,
		required,
		id,
		name,
		searchable = true,
		clearable = true,
		fetchOnOpen,
		onDropdownOpen,
		wrapper,
		wrapperProps,
		...props
	},
	ref,
) => {
	const inputId = id || name

	const data = useCallback(() => {
		if(!options) return []

		return options.map(option => {
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
	}, [options])

	const fetchNewRecords = () => {
		if(fetchOnOpen) {
			router.reload({ only: coerceArray(fetchOnOpen) })
		}

		if(onDropdownOpen) onDropdownOpen()
	}

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
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
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default React.memo(SearchableDropdownComponent)
