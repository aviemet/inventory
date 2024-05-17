import React, { forwardRef } from 'react'
import { MultiSelect, type ComboboxData, type MultSelectInputProps as MantineMultSelectInputProps } from '@mantine/core'
import Label from './Label'
import { type BaseInputProps } from '.'
import InputWrapper from './InputWrapper'
import { router } from '@inertiajs/react'
import { coerceArray } from '@/lib'

export interface MultSelectInputProps extends Omit<MantineMultSelectInputProps, 'data'>, BaseInputProps {
	options?: ComboboxData
	fetchOnOpen?: string
}

const MultiSelectComponent = forwardRef<HTMLInputElement, MultSelectInputProps>((
	{
		options = [],
		label,
		required,
		id,
		name,
		size = 'md',
		wrapper,
		wrapperProps,
		fetchOnOpen,
		onDropdownOpen,
		...props
	},
	ref,
) => {
	const inputId = id || name

	const handleDropdownOpen = () => {
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
			<MultiSelect
				ref={ ref }
				// Add "search" suffix to prevent password managers trying to autofill dropdowns
				id={ `${inputId}-search` }
				autoComplete="off"
				name={ name }
				size={ size }
				data={ options }
				required={ required }
				onDropdownOpen={ handleDropdownOpen }
				nothingFoundMessage="No Results"
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default MultiSelectComponent
