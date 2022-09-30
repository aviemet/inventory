import React, { useState, useEffect, useMemo } from 'react'
import { Inertia, type VisitOptions } from '@inertiajs/inertia'
import { debounce } from 'lodash'
import { useTableContext } from '../TableContext'
import { TextInput } from '@/Components/Inputs'
import { SearchIcon, CrossIcon } from '@/Components/Icons'
import { ActionIcon, Box } from '@mantine/core'

/**
 * Performs an Inertia request to the current url (window.location), using the search params
 * as query string with the key of 'search'
 */
const SearchInput = () => {
	const { tableState: { model } } = useTableContext()
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
			display: 'flex',
			flex: 1,
		} }>
			<TextInput
				name="search"
				id="search"
				value={ searchValue }
				onChange={ e => setSearchValue(e.target.value) }
				rightSection={ searchValue !== '' && <ActionIcon onClick={ () => setSearchValue('') }>
					<CrossIcon color="grey" />
				</ActionIcon> }
				icon={ <SearchIcon size={ 24 } /> }
				sx={ {
					flex: 1,
					input: {
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
					},
				} }
			/>
		</Box>
	)
}

export default SearchInput
