import React, { forwardRef } from 'react'
import { Autocomplete, type AutocompleteProps } from '@mantine/core'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface IAutocompleteProps extends AutocompleteProps, IInputProps {}

const AutocompleteComponent = forwardRef<HTMLInputElement, IAutocompleteProps>((
	{ id, name, style, wrapper, wrapperProps, ...props },
	ref,
) => {
	const inputId = id ?? name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			<Autocomplete
				ref={ ref }
				id={ inputId }
				name={ name }
				style={ [{ padding: '14px 10px' }, style] }
				wrapperProps={ wrapper ? {} : wrapperProps }
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default AutocompleteComponent
