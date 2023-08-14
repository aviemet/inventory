import React from 'react'
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

	const handleChange = (type: string | null) => {
		switch(type) {
			case 'default':
				setInputValue(`${name}[start]`, null)
				break
			case 'range':
				setInputValue(`${name}[start]`, null)
				setInputValue(`${name}[end]`, null)
				break
			default:
				// eslint-disable-next-line no-console
				console.error('Invalid `type` value')
		}

		setInputValue(`${name}[type]`, type)
	}

	return (
		<Select
			label="Creation Date"
			{ ...props }
			onChange={ handleChange }
			options={ dateRangeOptions }
		/>
	)
}

export default React.memo(Type)
