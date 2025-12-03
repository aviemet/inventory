import { router } from "@inertiajs/react"
import { LoadingOverlay, useMantineTheme } from "@mantine/core"
import clsx from "clsx"
import { DataTable as MantineDataTable, type DataTableProps, type DataTableSortStatus } from "mantine-datatable"
import React, { useEffect, useMemo, useState } from "react"

import * as classes from "./DataTable.css"
import { Pagination } from "../Pagination"
import { useTableContext } from "../Provider"

export type TableDataTableProps<T = Record<string, unknown>> = DataTableProps<T> & {
	pagination?: Schema.Pagination
	model?: string
	selectable?: boolean
	onSortChange?: (field: string | null, direction: "asc" | "desc" | null) => void
	onSelectedRecordsChange?: (records: T[]) => void
}

export function DataTable<T = Record<string, unknown>>({
	columns = [],
	records,
	pagination,
	model,
	selectable = false,
	onSortChange,
	onSelectedRecordsChange,
	classNames,
	...props
}: TableDataTableProps<T>) {
	const theme = useMantineTheme()
	const context = useTableContext(false)
	const searching = context?.searching ?? false

	const [selectedRecords, setSelectedRecords] = useState<T[]>([])

	const getSortStatusFromURL = (): DataTableSortStatus<T> | undefined => {
		if(!pagination || !model) return undefined
		const params = new URLSearchParams(window.location.search)
		const sort = params.get("sort")
		const direction = params.get("direction") as "asc" | "desc" | null
		if(!sort || !direction) return undefined
		return {
			columnAccessor: sort as keyof T,
			direction: direction as "asc" | "desc",
		}
	}

	const getInitialSortStatus = (): DataTableSortStatus<T> | undefined => {
		if(!pagination || !model) return undefined
		const params = new URLSearchParams(window.location.search)
		const sort = params.get("sort")
		const direction = params.get("direction") as "asc" | "desc" | null
		if(!sort || !direction) return undefined
		return {
			columnAccessor: sort as keyof T,
			direction: direction as "asc" | "desc",
		}
	}

	const [sortStatus, setSortStatus] = useState<DataTableSortStatus<T> | undefined>(getInitialSortStatus)

	useEffect(() => {
		if(!pagination || !model) return

		const updateFromURL = () => {
			const params = new URLSearchParams(window.location.search)
			const sort = params.get("sort")
			const direction = params.get("direction") as "asc" | "desc" | null
			if(sort && direction) {
				setSortStatus({
					columnAccessor: sort as keyof T,
					direction: direction as "asc" | "desc",
				})
			} else {
				setSortStatus(undefined)
			}
		}

		const handleSuccess = () => updateFromURL()
		document.addEventListener("inertia:success", handleSuccess)
		window.addEventListener("popstate", updateFromURL)

		return () => {
			document.removeEventListener("inertia:success", handleSuccess)
			window.removeEventListener("popstate", updateFromURL)
		}
	}, [pagination, model])

	const handleSortStatusChange = (status: DataTableSortStatus<T>) => {
		if(onSortChange) {
			onSortChange(String(status.columnAccessor), status.direction ?? null)
			return
		}

		if(pagination && model) {
			const url = new URL(window.location.href)
			if(status.direction) {
				url.searchParams.set("sort", String(status.columnAccessor))
				url.searchParams.set("direction", status.direction)
			} else {
				url.searchParams.delete("sort")
				url.searchParams.delete("direction")
			}

			router.get(url.toString(), {}, {
				preserveState: true,
				preserveScroll: true,
				replace: true,
			})
		}
	}

	const handleSelectedRecordsChange = (newSelected: T[]) => {
		setSelectedRecords(newSelected)
		onSelectedRecordsChange?.(newSelected)
	}

	const sortProps = sortStatus ? { sortStatus } : {}
	const selectionProps = selectable
		? {
			selectedRecords,
			onSelectedRecordsChange: handleSelectedRecordsChange,
		}
		: {}

	return (
		<div style={ { position: "relative", flex: 1, display: "flex", flexDirection: "column", minHeight: 0 } }>
			{ searching && (
				<LoadingOverlay visible={ searching } overlayProps={ { blur: 1 } } />
			) }
			{ /* @ts-ignore - TypeScript cannot narrow discriminated unions when spreading props. This works at runtime. */ }
			<MantineDataTable
				columns={ columns }
				records={ records }
				onSortStatusChange={ handleSortStatusChange }
				emptyState={ <></> }
				stickyHeader
				height="100%"
				scrollAreaProps={ {
					offsetScrollbars: false,
				} }
				renderPagination={ pagination && model
					? () => <Pagination pagination={ pagination } model={ model } />
					: undefined
				}
				classNames={ {
					table: clsx(classes.table, classNames?.table),
					root: clsx(classes.root, classNames?.root),
					header: clsx(classes.header, classNames?.header),
					footer: classNames?.footer,
					pagination: classNames?.pagination,
				} }
				{ ...sortProps }
				{ ...selectionProps }
				{ ...props }
			/>
		</div>
	)
}
