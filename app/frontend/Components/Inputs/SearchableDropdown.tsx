import React, { forwardRef, useMemo } from 'react'
import { Select, type SelectProps } from '@mantine/core'
import Label from './Label'

export interface ISearchableDropdownProps extends Omit<SelectProps, 'data'> {
	options: Array<Record<string, any>>
	getLabel?: (option: Record<string, any>) => any
	getValue?: (option: Record<string, any>) => string
	disabledOptions?: (label: string, value: string | number) => boolean
	onOpen?: () => void
	filterMatchKeys?: string[]
}

const SearchableDropdownComponent = forwardRef<HTMLInputElement, ISearchableDropdownProps>((
	{
		options = [],
		getLabel = option => option.name,
		getValue = option => String(option.id),
		disabledOptions,
		onChange,
		onOpen,
		filterMatchKeys,
		label,
		required,
		id,
		searchable = true,
		clearable = true,
		...props
	},
	ref,
) => {
	const data = useMemo(() => options.map(option => {
		const optionPart = {
			label: getLabel(option),
			value: getValue(option),
			disabled: false,
		}

		if(disabledOptions) {
			optionPart.disabled = disabledOptions(optionPart.label, optionPart.value)
		}

		return optionPart
	}), [options])

	const handleChange = (value: string|null) => {
		if(onChange) onChange(value)
	}

	return (
		<>
			{ label && <Label required={ required } htmlFor={ id }>
				{ label }
			</Label> }
			<Select
				ref={ ref }
				searchable
				clearable={ clearable }
				size="md"
				data={ data }
				maxDropdownHeight={ 400 }
				nothingFound="No Results"
				onChange={ handleChange }
				id={ id }
				{ ...props }
			/>
		</>
	)
})

export default React.memo(SearchableDropdownComponent)
