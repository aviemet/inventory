import React, { forwardRef } from 'react'
import { Select, type SelectItem, type SelectProps } from '@mantine/core'
import { router } from '@inertiajs/react'
import { coerceArray } from '@/lib'
import { type IInputProps } from '.'
import Label from './Label'
import InputWrapper from './InputWrapper'

export interface ISelectProps extends Omit<SelectProps, 'data'>, IInputProps {
	options?: readonly (string | SelectItem)[]
	onOpen?: () => void
	fetchOnOpen?: string
}

const SelectComponent = forwardRef<HTMLInputElement, ISelectProps>((
	{
		options = [],
		label,
		required,
		id,
		name,
		fetchOnOpen,
		onDropdownOpen,
		wrapper,
		wrapperProps,
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
			<Select
				ref={ ref }
				id={ inputId }
				name={ name }
				size="md"
				data={ options }
				required={ required }
				maxDropdownHeight={ 400 }
				nothingFound="No Results"
				onDropdownOpen={ handleDropdownOpen }
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default React.memo(SelectComponent)
