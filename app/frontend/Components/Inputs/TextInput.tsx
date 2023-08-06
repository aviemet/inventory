import React, { forwardRef, useState } from 'react'
import { TextInput, type TextInputProps } from '@mantine/core'
import Label from './Label'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'
import { CrossIcon } from '../Icons'
import { isUnset } from '@/lib'

export interface ITextInputProps extends TextInputProps, IInputProps {
	clearable?: boolean
}

const TextInputComponent = forwardRef<HTMLInputElement, ITextInputProps>((
	{
		name,
		label,
		required = false,
		id,
		size = 'md',
		radius = 'xs',
		wrapper,
		wrapperProps,
		clearable = false,
		value,
		onChange,
		readOnly,
		...props
	},
	ref,
) => {
	const [localValue, setLocalValue] = useState(value || '')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(onChange) {
			onChange(e)
		} else {
			setLocalValue(e.target.value)
		}
	}

	const handleClear = () => {
		const fakeEvent = {
			target: {
				value: '',
			},
		} as React.ChangeEvent<HTMLInputElement>
		handleChange(fakeEvent)
	}

	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<TextInput
				ref={ ref }
				name={ name }
				id={ inputId }
				value={ value || localValue }
				onChange={ handleChange }
				required={ required }
				size={ size }
				radius={ radius }
				rightSection={ !readOnly && clearable && !isUnset(value) && <CrossIcon onClick={ handleClear } /> }
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default TextInputComponent
