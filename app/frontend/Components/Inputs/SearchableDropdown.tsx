import React from 'react'
import { Select, type SelectProps } from '@mantine/core'
import Label from './Label'

export interface ISearchableDropdownProps extends Omit<SelectProps, 'data'> {
	options: Array<Record<string, any>>
	defaultValue: string
	getLabel?: (option: Record<string, any>) => any
	getValue?: (option: Record<string, any>) => string
	onOpen?: () => void
	filterMatchKeys?: string[]
}

const SearchableDropdownComponent = ({
	options,
	defaultValue,
	getLabel = option => option.name,
	getValue = option => String(option.id),
	onChange,
	onOpen,
	filterMatchKeys,
	label,
	required,
	id,
	...props
}: ISearchableDropdownProps) => {
	const data = options.map(option => ({ label: getLabel(option), value: getValue(option) }))

	const handleChange = (value: string|null) => {
		if(onChange) onChange(value)
	}

	return (
		<>
			{ label && <Label required={ required } htmlFor={ id }>
				{ label }
			</Label> }
			<Select
				size="md"
				data={ data }
				searchable
				maxDropdownHeight={ 400 }
				nothingFound="No Results"
				onChange={ handleChange }
				filter={ (value, item) =>
					item?.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
        item?.value?.toLowerCase().includes(value.toLowerCase().trim())
				}
				id={ id }
				{ ...props }
			/>
		</>
	)
}

export default SearchableDropdownComponent
