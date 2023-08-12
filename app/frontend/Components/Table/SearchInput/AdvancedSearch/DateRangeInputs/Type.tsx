import React, { useEffect, useState } from 'react'
import { Select } from '@/Components/Inputs'
import { type IAdvancedInputProps } from '.'

export const dateRangeOptions = [
	{ label: 'Exact Date', value: 'exact' },
	{ label: 'Before', value: 'before' },
	{ label: 'After', value: 'after' },
	{ label: 'Between', value: 'range' },
] as const

const Type = ({
	advancedSearch,
	name,
}: IAdvancedInputProps) => {
	const { inputProps, setInputValue } = advancedSearch
	const props = inputProps(`${name}[type]`)

	const [internalValue, setInternalValue] = useState<typeof dateRangeOptions[number]['value']>(props.value)

	useEffect(() => {
		setInputValue(`${name}[type]`, internalValue)
	}, [internalValue])

	// const handleChange = (value: string) => {
	// 	setInputValue(`${name}[type]`, value)
	// }

	return (
		<Select
			label="Creation Date"
			{ ...props }
			value={ internalValue }
			onChange={ setInternalValue }
			options={ dateRangeOptions }
		/>
	)
}

export default React.memo(Type)
