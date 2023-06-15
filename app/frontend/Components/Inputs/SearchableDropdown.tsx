import React, { forwardRef, useCallback, useState } from 'react'
import { Select, type SelectProps } from '@mantine/core'
import Label from './Label'
import axios from 'axios'

const getSearchLabel = (option: Record<string, any>) => option.name

export interface ISearchableDropdownProps extends Omit<SelectProps, 'data'> {
	options: Array<Record<string, any>>
	getLabel?: (option: Record<string, any>) => any
	getValue?: (option: Record<string, any>) => string
	disabledOptions?: (label: string, value: string | number) => boolean
	onOpen?: () => void
	onChange?: (option: string|null|Schema.Search) => void
	filterMatchKeys?: string[]
	endpoint?: string
}

const SearchableDropdownComponent = forwardRef<HTMLInputElement, ISearchableDropdownProps>((
	{
		options = [],
		getLabel = option => option.name,
		getValue = option => String(option.id),
		disabledOptions,
		onSearchChange,
		onChange,
		filterMatchKeys,
		label,
		required,
		id,
		name,
		searchable = true,
		clearable = true,
		endpoint,
		...props
	},
	ref,
) => {
	const [fetchedOptions, setFetchedOptions] = useState<any[]>([])

	const inputId = id || name

	const data = useCallback(() => {
		const iterableOptions = endpoint ? fetchedOptions : options

		return iterableOptions.map(option => {
			const optionPart = {
				label: endpoint ? getSearchLabel(option) : getLabel(option),
				value: getValue(option),
				disabled: false,
			}

			if(disabledOptions) {
				optionPart.disabled = disabledOptions(optionPart.label, optionPart.value)
			}

			return optionPart
		})
	}, [options, fetchedOptions])

	const fetchNewRecords = (query?: string) => {
		if(endpoint && query){
			axios.get(endpoint, {
				params: {
					search: query,
				},
			})
				.then(response => {
					setFetchedOptions(response.data)
				})
				.catch(error => {
					console.error({ error })
				})
		}
	}

	const handleSearchChange = (query: string) => {
		if(endpoint) {
			fetchNewRecords(query)
		}
		if(onSearchChange) onSearchChange(query)
	}

	const handleChange = (value: string) => {
		if(!onChange) return

		if(endpoint && value !== undefined) {
			onChange(fetchedOptions.find(el => String(el.id) === String(value)) || [])
		} else {
			onChange(value)
		}
	}

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<Select
				ref={ ref }
				id={ inputId }
				name={ name }
				searchable={ searchable }
				clearable={ clearable }
				size="md"
				data={ data() }
				required={ required }
				maxDropdownHeight={ 400 }
				nothingFound="No Results"
				onSearchChange={ handleSearchChange }
				onChange={ handleChange }
				{ ...props }
			/>
		</>
	)
})

export default React.memo(SearchableDropdownComponent)
