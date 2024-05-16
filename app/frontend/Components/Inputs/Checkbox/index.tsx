import React, { forwardRef } from 'react'
import { Checkbox, type CheckboxProps as MantineCheckboxProps } from '@mantine/core'
import { ForwardRefWithStaticComponents } from '@mantine/utils'
import CheckboxGroup from './Group'
import { type BaseInputProps } from '..'
import InputWrapper from '../InputWrapper'

export interface CheckboxProps extends MantineCheckboxProps, BaseInputProps {}

export type CheckboxInputComponent = ForwardRefWithStaticComponents<
CheckboxProps,
{Group: typeof CheckboxGroup}
>

const CheckboxComponent: CheckboxInputComponent = forwardRef<HTMLInputElement, CheckboxProps>((
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
