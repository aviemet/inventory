import React, { forwardRef, useEffect, useState } from 'react'
import { SearchableDropdown, HiddenInput } from '@/Components/Inputs'
import { ISearchableDropdownProps } from '@/Components/Inputs/SearchableDropdown'
import { Field } from '@/Components/Form'
import { useForm, useInertiaInput } from 'use-inertia-form'
import { getSearchResults } from '@/queries/searches'

interface IDocumentableSearch extends Omit<ISearchableDropdownProps, 'options'> {
	label: string
}

const DocumentableSearch = forwardRef<HTMLInputElement, IDocumentableSearch>((
	props,
	ref,
) => {
	const [params, setParams] = useState({})
	const { data, refetch } = getSearchResults(params)

	const { getData } = useForm()
	const documentableIdInput = useInertiaInput({ name: 'documentable_id' })
	const documentableTypeInput = useInertiaInput({ name: 'documentable_type' })

	useEffect(() => {
		refetch()
	}, [params])

	useEffect(() => {
		// if(!data) {
		// 	setParams({

		// 	})
		// }
	}, [])

	const handleChange = (value: string|null) => {
		documentableIdInput.setValue(value?.searchable_id)
		documentableTypeInput.setValue(value?.searchable_type)
	}

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
					onSearchChange={ value => setParams({ search: value }) }
					placeholder="Start typing to search"
					onChange={ handleChange }
					{ ...props }
				/>
			</Field>

			<HiddenInput name={ documentableIdInput.inputName } id={ documentableIdInput.inputId } value={ documentableIdInput.value } />
			<HiddenInput name={ documentableTypeInput.inputName } id={ documentableTypeInput.inputId } value={ documentableTypeInput.value } />
		</>
	)
})

export default DocumentableSearch
