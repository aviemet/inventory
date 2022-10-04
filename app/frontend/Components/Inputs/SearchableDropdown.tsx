import React, { useMemo } from 'react'
import { Select, type SelectProps } from '@mantine/core'
import Label from './Label'

export interface ISearchableDropdownProps extends Omit<SelectProps, 'data'> {
	options: Array<Record<string, any>>
	getLabel?: (option: Record<string, any>) => any
	getValue?: (option: Record<string, any>) => string
	onOpen?: () => void
	filterMatchKeys?: string[]
}

const SearchableDropdownComponent = ({
	options = [],
	getLabel = option => option.name,
	getValue = option => String(option.id),
	onChange,
	onOpen,
	filterMatchKeys,
	label,
	required,
	id,
	searchable = true,
	clearable = true,
	...props
}: ISearchableDropdownProps) => {
	const data = useMemo(() => options.map(option => ({ label: getLabel(option), value: getValue(option) })), [options])

	const handleChange = (value: string|null) => {
		if(onChange) onChange(value)
	}

	return (
		<>
			{ label && <Label required={ required } htmlFor={ id }>
				{ label }
			</Label> }
			<Select
				searchable
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
}

export default React.memo(SearchableDropdownComponent)
