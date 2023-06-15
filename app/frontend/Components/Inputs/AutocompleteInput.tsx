import React, { forwardRef } from 'react'
import { Autocomplete, Sx, type AutocompleteProps } from '@mantine/core'

export interface IAutocompleteProps extends AutocompleteProps {
	sx?: Sx
}

const AutocompleteComponent = forwardRef<HTMLInputElement, IAutocompleteProps>((
	{ id, name, sx, ...props },
	ref,
) => {
	const inputId = id ?? name

	return (
		<Autocomplete
			ref={ ref }
			id={ inputId }
			name={ name }
			sx={ [{ padding: '14px 10px' }, sx] }
			{ ...props }
		/>
	)
})

export default AutocompleteComponent
