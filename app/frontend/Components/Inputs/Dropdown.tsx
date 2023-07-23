import React, { forwardRef } from 'react'
import { Select, type SelectProps } from '@mantine/core'
import Label from './Label'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface IDropdownProps extends SelectProps, IInputProps {}

const DropdownComponent = forwardRef<HTMLInputElement, IDropdownProps>((
	{
		data = [],
		label,
		required,
		id,
		name,
		size = 'md',
		wrapper,
		wrapperProps,
		...props
	},
	ref,
) => {
	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<Select
				ref={ ref }
				id={ inputId }
				name={ name }
				size={ size }
				data={ data }
				required={ required }
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default React.memo(DropdownComponent)
