import React, { useEffect, useMemo } from 'react'
import { Inertia, type VisitOptions } from '@inertiajs/inertia'
import { debounce } from 'lodash'
import { useTableContext } from '../TableContext'
import { TextInput } from '@/Components/Inputs'
import { SearchIcon, CrossIcon, DoubleDownArrowIcon } from '@/Components/Icons'
import { ActionIcon, Box } from '@mantine/core'
import { Table } from '@/Components'
import { useSessionStorage } from '@mantine/hooks'

interface ISearchInputProps {
	columnPicker?: boolean
}

/**
 * Performs an Inertia request to the current url (window.location), using the search params
 * as query string with the key of 'search'
 */
const SearchInput = ({ columnPicker = true }: ISearchInputProps) => {
	const { tableState: { model } } = useTableContext()
	const { search } = window.location

	const params = new URLSearchParams(search)
	const [searchValue, setSearchValue] = useSessionStorage({
		key: `${model}-query`,
		defaultValue: params.get('search') || ''
	})

	useEffect(() => {
		const urlSearchString = params.get('search')

		if(urlSearchString) {
			setSearchValue(urlSearchString)
		} else if(searchValue !== '' && !urlSearchString) {
			setSearchValue(searchValue)
		}
	}, [])

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
			<ActionIcon size={ 42 } variant="filled" color="primary">
				<DoubleDownArrowIcon size={ 24 } />
			</ActionIcon>
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
			{ columnPicker && <Table.ColumnPicker /> }
		</Box>
	)
}

export default SearchInput
