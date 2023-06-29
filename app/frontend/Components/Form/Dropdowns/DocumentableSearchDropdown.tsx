import React, { forwardRef } from 'react'
import { SearchableDropdown, HiddenInput } from '@/Components/Inputs'
import { ISearchableDropdownProps } from '@/Components/Inputs/SearchableDropdown'
import { Field } from '@/Components/Form'
import { Routes } from '@/lib'
import { useInertiaInput } from 'use-inertia-form'
import { getSearchResults } from '@/queries/searches'

interface IFullSearchDropdown extends Omit<ISearchableDropdownProps, 'options'> {
	label: string
}

const FullSearchDropdown = forwardRef<HTMLInputElement, IFullSearchDropdown>((
	{ ...props },
	ref,
) => {
	const { data, isStale, refetch } = getSearchResults({ enabled: false })

	const documentableIdInput = useInertiaInput({ name: 'documentable_id' })
	const documentableTypeInput = useInertiaInput({ name: 'documentable_type' })

	return (
		<>
			<Field
				type="select"
				required={ true }
				errors={ false }
			>
				<SearchableDropdown
					ref={ ref }
					options={ data }
					onSearchChange={ () => refetch() }
					placeholder="Start typing to search"
					onChange={ (option) => {
						documentableIdInput.setValue(String((option as Schema.Search).searchable_id))
						documentableTypeInput.setValue(String((option as Schema.Search).searchable_type))
					} }
					{ ...props }
				/>
			</Field>

			<HiddenInput name={ documentableIdInput.inputName } id={ documentableIdInput.inputId } value={ documentableIdInput.value } />
			<HiddenInput name={ documentableTypeInput.inputName } id={ documentableTypeInput.inputId } value={ documentableTypeInput.value } />
		</>
	)
})

export default FullSearchDropdown
