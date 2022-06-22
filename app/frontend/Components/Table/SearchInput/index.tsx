import React, { useState, useEffect, useMemo } from 'react'
import { Inertia, type VisitOptions } from '@inertiajs/inertia'
import { debounce } from 'lodash'
import { useTableContext } from '../TableContext'
import { TextInput } from '@/Components/Inputs'
import { SearchIcon, CrossIcon } from '@/Components/Icons'
import { ActionIcon, Box } from '@mantine/core'
import ColumnPicker from './ColumnPicker'

interface ISearchInputProps {
	model?: string
	columnPicker?: boolean
	rows?: Record<string, any>[]
}

const SearchInput = ({ model, columnPicker = true, rows }: ISearchInputProps) => {
	const { tableState: { hideable } } = useTableContext()
	const { search } = window.location
	const params = new URLSearchParams(search)
	const [searchValue, setSearchValue] = useState(params.get('search') || '')

	const debouncedSearch = useMemo(() => debounce((path) => {
		const options: VisitOptions = {
			replace: true,
			preserveScroll: true,
			preserveState: true,
		}
		if(model) options.only = [model, 'pagination']
		Inertia.get(path, {}, options)
	}, 500), [])

	useEffect(() => {
		const url = new URL(window.location.href)

		if(url.searchParams.get('search') === searchValue) return

		if(searchValue === '') {
			url.searchParams.delete('search')
		} else {
			url.searchParams.set('search', searchValue)
			url.searchParams.delete('page')
		}

		debouncedSearch(url.toString())
	}, [searchValue])

	return (
		<Box sx={ {
			display: 'flex'
		} }>
			<TextInput
				name="search"
				id="search"
				value={ searchValue }
				onChange={ e => setSearchValue(e.target.value) }
				rightSection={ <ActionIcon onClick={ () => setSearchValue('') }>
					<CrossIcon color="grey" />
				</ActionIcon> }
				icon={ <SearchIcon size={ 24 } /> }
				sx={ theme => ({
					flex: 1,
					input: {
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
					},
				}) }
			/>
			{ hideable && model && columnPicker && <ColumnPicker model={ model } /> }
		</Box>
	)
}

export default SearchInput

