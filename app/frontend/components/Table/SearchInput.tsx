import { type VisitOptions } from "@inertiajs/core"
import { router } from "@inertiajs/react"
import { ActionIcon, Box } from "@mantine/core"
import { useSessionStorage } from "@mantine/hooks"
import { debounce } from "lodash"
import React, { useMemo, useEffect } from "react"

import { SearchIcon, CrossIcon } from "@/components/Icons"
import { TextInput } from "@/components/Inputs"
import { useInit, useLocation } from "@/lib/hooks"

import { AdvancedSearch } from "./SearchInput/AdvancedSearch"
import { ColumnPicker } from "./SearchInput/ColumnPicker"
import * as classes from "./Table.css"
import { useTableContext } from "./TableContext"

interface SearchInputProps {
	columnPicker?: boolean
	advancedSearch?: React.ReactNode
}

export function SearchInput({ columnPicker = true, advancedSearch }: SearchInputProps) {
	const { model, setSearching } = useTableContext()

	const location = useLocation()
	const [searchValue, setSearchValue] = useSessionStorage({
		key: `${model ?? "standard"}-query`,
		defaultValue: location.params.get("search") || "",
		getInitialValueInEffect: false,
	})

	useInit(() => {
		const urlSearchString = location.params.get("search")

		if(urlSearchString) {
			setSearchValue(urlSearchString)
			return
		}

		if(model && searchValue) {
			setSearching(true)
			setSearchValue(searchValue)
		}
	})

	const debouncedSearch = useMemo(
		() => debounce((path: string) => {
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
			if(model) options.only = [model, "pagination"]

			router.get(path, {}, options)
		}, 500),
		[model, setSearching]
	)

	useEffect(() => {
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
	}, [debouncedSearch, searchValue])

	return (
		<Box className={ classes.searchWrapper }>
			{ advancedSearch && <AdvancedSearch>{ advancedSearch }</AdvancedSearch> }
			<TextInput
				name="search"
				id="search"
				value={ searchValue }
				onChange={ e => setSearchValue(e.target.value) }
				rightSection={ searchValue !== "" && <ActionIcon variant="transparent" onClick={ () => setSearchValue("") }>
					<CrossIcon color="grey" />
				</ActionIcon> }
				leftSection={ <SearchIcon size={ 24 } /> }
				leftSectionPointerEvents="none"
				className={ classes.searchInput }
				wrapper={ false }
				aria-label="Search"
			/>
			{ columnPicker && <ColumnPicker /> }
		</Box>
	)
}

SearchInput.displayName = "Table.SearchInput"
