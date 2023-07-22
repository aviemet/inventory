import React, { forwardRef } from 'react'
import { Select, type SelectProps } from '@mantine/core'
import Label from './Label'

export interface IDropdownProps extends SelectProps {}

const DropdownComponent = forwardRef<HTMLInputElement, IDropdownProps>((
	{
		data = [],
		label,
		required,
		id,
		name,
		...props
	},
	ref,
) => {
	const inputId = id || name

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<Select
				ref={ ref }
				id={ inputId }
				name={ name }
				size="md"
				data={ data }
				required={ required }
				{ ...props }
			/>
		</>
	)
})

export default React.memo(DropdownComponent)
