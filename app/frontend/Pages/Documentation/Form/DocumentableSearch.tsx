import React, { useEffect, useState } from 'react'
import { Select, HiddenInput } from '@/Components/Form'
import { useForm } from 'use-inertia-form'
import { useGetSearchResults } from '@/queries'
import { type FormSelectProps, type SelectOption } from '@/Components/Form/Inputs/Select'
import { useDebouncedCallback } from '@mantine/hooks'

interface DocumentableSearchProps extends Omit<FormSelectProps, 'options'|'searchable'> {
	label: string
}

const DocumentableSearch = ({
	name = 'documentable_id',
	placeholder = 'Start typing to search',
	onSearchChange,
	onChange,
	...props
}: DocumentableSearchProps) => {
	const [searchParams, setSearchParams] = useState<string>('')
	const { data, refetch } = useGetSearchResults({ searchParams: searchParams })

	const { setData } = useForm()

	useEffect(() => {
		refetch()
	}, [searchParams])

	const debouncedSearch = useDebouncedCallback((query: string) => {
		setSearchParams(query)
	}, 300)

	const handleSearchChange = (value: string) => {
		debouncedSearch(value)
	}

	const handleChange = (value: SelectOption|null) => {
		if(!value) return

		const choice = data!.find(datum => String(datum.id) === value)

		if(!choice) return

		setData('documentation.documentable_type', String(choice.searchable_type))
	}

	return (
		<>
			<Select
				searchable
				name={ name }
				options={ !data ? [] : data.map(option => ({
					label: option.label!,
					value: String(option.id!),
				})) }
				placeholder={ placeholder }
				onSearchChange={ handleSearchChange }
				onChange={ handleChange }
				{ ...props }
			/>

			<HiddenInput name='documentable_type' />
		</>
	)
}

export default DocumentableSearch
