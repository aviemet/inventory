import React, { forwardRef } from 'react'
import { Autocomplete, Sx, type AutocompleteProps } from '@mantine/core'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface IAutocompleteProps extends AutocompleteProps, IInputProps {
	sx?: Sx
}

const AutocompleteComponent = forwardRef<HTMLInputElement, IAutocompleteProps>((
	{ id, name, sx, wrapper, wrapperProps, ...props },
	ref,
) => {
	const inputId = id ?? name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			<Autocomplete
				ref={ ref }
				id={ inputId }
				name={ name }
				sx={ [{ padding: '14px 10px' }, sx] }
				wrapperProps={ wrapper ? {} : wrapperProps }
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default AutocompleteComponent
