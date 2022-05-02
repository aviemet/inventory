import React, { useState, useEffect, useMemo } from 'react'
import { Inertia, type VisitOptions } from '@inertiajs/inertia'
import { debounce } from 'lodash'
import { Input } from '@/Components/Inputs'
import { SearchIcon, CrossIcon } from '@/Components/Icons'
import ColumnPicker from './ColumnPicker'
import tw from 'twin.macro'

interface ISearchInputProps {
	model?: string
	columnPicker?: boolean
	rows?: Record<string, any>[]
}

const SearchInput = ({ model, columnPicker = true, rows }: ISearchInputProps) => {
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
		<div tw="flex-1 relative">
			<div tw="absolute w-6 text-gray-700 h-full ml-2">
				{ searchValue !== '' ?
					<CrossIcon tw="w-full h-full cursor-pointer" onClick={ () => setSearchValue('') } />
					:
					<SearchIcon tw="w-full h-full" />
				}
			</div>
			<Input
				tw="rounded-l pl-9 h-full"
				type="text"
				name="search"
				id="search"
				value={ searchValue }
				onChange={ e => setSearchValue(e.target.value) }
			/>
			{ columnPicker && <ColumnPicker /> }
		</div>
	)
}

export default SearchInput
