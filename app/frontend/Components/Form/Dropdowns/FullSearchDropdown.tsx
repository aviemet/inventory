import React, { forwardRef } from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'

interface IFullSearchDropdown {
	name: string
	label: string
}

const FullSearchDropdown = forwardRef<HTMLInputElement, IFullSearchDropdown>((
	{ ...props },
	ref,
) => {
	return (
		<SearchableDropdown
			ref={ ref }
			options={ [] }
			endpoint={ Routes.apiSearches() }
			getLabel={ option => option.content }
			{ ...props }
		/>
	)
})

export default FullSearchDropdown
