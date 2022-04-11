import React, { useState, useEffect, useMemo } from 'react'
import { Inertia, type VisitOptions } from '@inertiajs/inertia'
import { debounce } from 'lodash'

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
		if(model) options.only = [model]
		Inertia.get(path, {}, options)
	}, 500), [])

	useEffect(() => {
		const { origin, pathname, search } = window.location
		const params = new URLSearchParams(search)
		const searchParam = params.get('search') || ''

		if(searchParam === searchValue) return

		params.set('search', searchValue)

		debouncedSearch(`${origin}${pathname}?${params.toString()}`)
	}, [searchValue])

	return (
		<div className="inline-block">
			<input
				className="rounded-l"
				type="text"
				name="search"
				id="search"
				value={ searchValue }
				onChange={ e => setSearchValue(e.target.value) }
			/>
		</div>
	)
}

export default SearchInput