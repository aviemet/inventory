import { type VisitOptions } from "@inertiajs/core"
import { router } from "@inertiajs/react"
import { ActionIcon, Box } from "@mantine/core"
import { useSessionStorage } from "@mantine/hooks"
import { debounce } from "lodash"
import React, { useMemo, useEffect } from "react"

import { SearchIcon, CrossIcon } from "@/components/Icons"
import { TextInput } from "@/components/Inputs"
import { useInit, useLocation } from "@/lib/hooks"

import { AdvancedSearch } from "./AdvancedSearch/AdvancedSearch"
import { ColumnPicker } from "./ColumnPicker"
import * as classes from "./SearchInput.css"
import { useTableContext } from "../TableContext/TableContext"

interface SearchInputProps {
	value?: string
	onChange?: (value: string) => void
	onSearch?: (value: string) => void
	columnPicker?: boolean
	advancedSearch?: React.ReactNode
	debounceMs?: number
}

export function SearchInput({
	value: valueProp,
	onChange: onChangeProp,
	onSearch: onSearchProp,
	columnPicker = true,
	advancedSearch,
	debounceMs = 500,
}: SearchInputProps) {
	const context = useTableContext(false)
	const model = context?.model
	const setSearching = context?.setSearching

	const location = useLocation()
	const [internalValue, setInternalValue] = useSessionStorage({
		key: `${model ?? "standard"}-query`,
		defaultValue: location.params.get("search") || "",
		getInitialValueInEffect: false,
	})

	const isControlled = valueProp !== undefined
	const searchValue = isControlled ? valueProp : internalValue
	const setSearchValue = isControlled ? onChangeProp : setInternalValue

	useInit(() => {
		if(isControlled) return

		const urlSearchString = location.params.get("search")

		if(urlSearchString) {
			setInternalValue(urlSearchString)
			return
		}

		if(model && internalValue) {
			setSearching?.(true)
			setInternalValue(internalValue)
		}
	})

	const debouncedSearch = useMemo(
		() => {
			if(onSearchProp) {
				return debounce((value: string) => {
					onSearchProp(value)
				}, debounceMs)
			}

			if(!model || !setSearching) return null

			return debounce((path: string) => {
				const options: VisitOptions = {
					replace: true,
					preserveScroll: true,
					preserveState: true,
					onStart: () => {
						setSearching(true)
					},
					onSuccess: () => {
						setSearching(false)
					},
				}
				options.only = [model, "pagination"]

				router.get(path, {}, options)
			}, debounceMs)
		},
		[model, setSearching, onSearchProp, debounceMs]
	)

	useEffect(() => {
		if(onSearchProp) {
			debouncedSearch?.(searchValue ?? "")
			return
		}

		if(!debouncedSearch || isControlled) return

		const url = new URL(window.location.href)

		if(
			url.searchParams.get("search") === searchValue ||
			(url.searchParams.get("search") === null && searchValue === "")
		) return

		if(searchValue === "") {
			url.searchParams.delete("search")
		} else {
			url.searchParams.set("search", searchValue ?? "")
			url.searchParams.delete("page")
		}

		debouncedSearch(url.toString())
	}, [debouncedSearch, searchValue, onSearchProp, isControlled])

	return (
		<Box className={ classes.searchWrapper }>
			{ advancedSearch && <AdvancedSearch>{ advancedSearch }</AdvancedSearch> }
			<TextInput
				name="search"
				id="search"
				value={ searchValue ?? "" }
				onChange={ e => setSearchValue?.(e.target.value) }
				rightSection={ searchValue !== "" && <ActionIcon variant="transparent" onClick={ () => setSearchValue?.("") }>
					<CrossIcon color="grey" />
				</ActionIcon> }
				leftSection={ <SearchIcon size={ 24 } /> }
				leftSectionPointerEvents="none"
				className={ classes.searchInput }
				wrapper={ false }
				aria-label="Search"
			/>
			{ columnPicker && model && <ColumnPicker /> }
		</Box>
	)
}

SearchInput.displayName = "Table.SearchInput"
