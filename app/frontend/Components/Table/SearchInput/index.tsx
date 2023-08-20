import React, { useEffect, useLayoutEffect, useMemo } from 'react'
import { router } from '@inertiajs/react'
import { type VisitOptions } from '@inertiajs/core'
import { debounce } from 'lodash'
import { useTableContext } from '../TableContext'
import { TextInput } from '@/Components/Inputs'
import { SearchIcon, CrossIcon } from '@/Components/Icons'
import { ActionIcon, Box } from '@mantine/core'
import { useSessionStorage } from '@mantine/hooks'
import useTableStyles from '../useTableStyles'
import ColumnPicker from './ColumnPicker'
import AdvancedSearch from './AdvancedSearch'
import { useLocation } from '@/lib/hooks'

interface ISearchInputProps {
	columnPicker?: boolean
	advancedSearch?: React.ReactNode
}

/**
 * Performs an Inertia request to the current url (window.location), using the search params
 * as query string with the key of 'search'
 */
const SearchInput = ({ columnPicker = true, advancedSearch }: ISearchInputProps) => {
	const { tableState: { model }, setTableState } = useTableContext()
	const { classes } = useTableStyles()

	const location = useLocation()
	const [searchValue, setSearchValue] = useSessionStorage({
		key: `${model ?? 'standard'}-query`,
		defaultValue: location.params.get('search') || '',
		getInitialValueInEffect: false,
	})

	// TODO: Justify using useLayoutEffect over useEffect
	useLayoutEffect(() => {
		const urlSearchString = location.params.get('search')

		// Don't override a direct visit with a url search param
		if(urlSearchString) {
			// This doesn't trigger a server visit due to checks in the other useEffect
			setSearchValue(urlSearchString)
		// Don't persist searches for tables not scoped to a model
		} else if(model && searchValue) {
			setTableState({ searching: true })
			setSearchValue(searchValue)
		}
	}, [location.params, model, searchValue, setSearchValue, setTableState])

	const debouncedSearch = useMemo(() => debounce((path) => {
		const options: VisitOptions = {
			replace: true,
			preserveScroll: true,
			preserveState: true,
			onStart: () => {
				setTableState({ searching: true })
			},
			onSuccess: () => {
				setTableState({ searching: false })
			},
		}
		if(model) options.only = [model, 'pagination']
		router.get(path, {}, options)
	}, 500), [model, setTableState])

	useEffect(() => {
		const url = new URL(window.location.href)

		if(
			url.searchParams.get('search') === searchValue ||
			(url.searchParams.get('search') === null && searchValue === '')
		) return

		if(searchValue === '') {
			url.searchParams.delete('search')
		} else {
			url.searchParams.set('search', searchValue)
			url.searchParams.delete('page')
		}

		debouncedSearch(url.toString())
	}, [debouncedSearch, searchValue])

	return (
		<Box className={ classes.searchWrapper }>
			{ advancedSearch && <AdvancedSearch>{ advancedSearch }</AdvancedSearch> }
			<TextInput
				name="search"
				id="search"
				value={ searchValue }
				onChange={ e => setSearchValue(e.target.value) }
				rightSection={ searchValue !== '' && <ActionIcon onClick={ () => setSearchValue('') }>
					<CrossIcon color="grey" />
				</ActionIcon> }
				icon={ <SearchIcon size={ 24 } /> }
				className={ classes.searchInput }
				wrapper={ false }
				aria-label="Search"
			/>
			{ columnPicker && <ColumnPicker /> }
		</Box>
	)
}

export default SearchInput
