import React, { forwardRef } from 'react'
import { Checkbox, type CheckboxProps } from '@mantine/core'
import { ForwardRefWithStaticComponents } from '@mantine/utils'
import CheckboxGroup from './Group'
import { IInputProps } from '..'
import InputWrapper from '../InputWrapper'

export interface ICheckboxProps extends CheckboxProps, IInputProps {}

export type InputCheckboxComponent = ForwardRefWithStaticComponents<
ICheckboxProps,
{Group: typeof CheckboxGroup}
>

const CheckboxComponent: InputCheckboxComponent = forwardRef<HTMLInputElement, ICheckboxProps>((
	{ id, name, wrapper, wrapperProps, ...props },
	ref,
) => {
	const inputId = id ?? name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			<Checkbox
				ref={ ref }
				id={ inputId }
				name={ name }
				{ ...props }
			/>
		</InputWrapper>
	)
}) as any

CheckboxComponent.Group = CheckboxGroup

export default CheckboxComponent
