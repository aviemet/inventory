import React, { forwardRef } from 'react'
import { MultiSelect, type SelectItem, type MultiSelectProps } from '@mantine/core'
import Label from './Label'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'
import { router } from '@inertiajs/react'
import { coerceArray } from '@/lib'

export interface IMultiSelectProps extends Omit<MultiSelectProps, 'data'>, IInputProps {
	options?: readonly (string | SelectItem)[]
	fetchOnOpen?: string
}

const MultiSelectComponent = forwardRef<HTMLInputElement, IMultiSelectProps>((
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
				id={ inputId }
				name={ name }
				size={ size }
				data={ options }
				required={ required }
				onDropdownOpen={ handleDropdownOpen }
				nothingFound="No Results"
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default React.memo(MultiSelectComponent)
