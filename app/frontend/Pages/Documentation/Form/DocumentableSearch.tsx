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

	const { data: formData, getData } = useForm()

	const documentableIdInput = useInertiaInput({ name: 'documentable_id' })
	const documentableTypeInput = useInertiaInput({ name: 'documentable_type' })

	useEffect(() => {
		refetch()
	}, [params])

	useEffect(() => {
		if(!data) {
			setParams({
				searchable_type: getData('documentation.documentable_type'),
				searchable_id: getData('documentation.documentable_id'),
			})
		}
	}, [])

	const handleChange = (value: string|null) => {
		if(!value) return

		const choice = data!.find(datum => String(datum.id) === value)

		if(!choice) return

		documentableIdInput.setValue(String(choice.searchable_id))
		documentableTypeInput.setValue(String(choice.searchable_type))
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
					getLabel={ option => option.label }
					onSearchChange={ value => setParams({ search: value }) }
					placeholder="Start typing to search"
					onChange={ handleChange }
					wrapper={ false }
					{ ...props }
				/>
			</Field>

			<HiddenInput name={ documentableIdInput.inputName } id={ documentableIdInput.inputId } value={ documentableIdInput.value } />
			<HiddenInput name={ documentableTypeInput.inputName } id={ documentableTypeInput.inputId } value={ documentableTypeInput.value } />
		</>
	)
})

export default DocumentableSearch
