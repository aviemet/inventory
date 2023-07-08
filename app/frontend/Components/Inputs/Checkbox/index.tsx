import React, { forwardRef } from 'react'
import { Checkbox, type CheckboxProps } from '@mantine/core'
import { ForwardRefWithStaticComponents } from '@mantine/utils'
import CheckboxGroup from './Group'

export interface ICheckboxProps extends CheckboxProps {}

export type InputCheckboxComponent = ForwardRefWithStaticComponents<
ICheckboxProps,
{Group: typeof CheckboxGroup}
>

const CheckboxComponent: InputCheckboxComponent = forwardRef<HTMLInputElement, ICheckboxProps>((
	{ id, name, ...props },
	ref,
) => {
	const inputId = id ?? name

	return (
		<Checkbox
			ref={ ref }
			id={ inputId }
			name={ name }
			{ ...props }
		/>
	)
}) as any

CheckboxComponent.Group = CheckboxGroup

export default CheckboxComponent
