import React, { useState, useEffect, useMemo } from 'react'
import { Inertia, type VisitOptions } from '@inertiajs/inertia'
import { debounce } from 'lodash'
import { Input } from '@/Components/Inputs'

const SearchInput = ({ model, rows }: { model?: string, rows?: Record<string, any>[]}) => {
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
		<Input
			className="rounded-l"
			type="text"
			name="search"
			id="search"
			value={ searchValue }
			onChange={ e => setSearchValue(e.target.value) }
		/>
	)
}

export default SearchInput