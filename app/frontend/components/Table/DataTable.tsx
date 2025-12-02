import { router } from "@inertiajs/react"
import clsx from "clsx"
import { DataTable as MantineDataTable, type DataTableProps, type DataTableSortStatus } from "mantine-datatable"
import React, { useMemo, useState } from "react"

import { useLocation } from "@/lib/hooks"

import * as classes from "./DataTable.css"
import { Pagination } from "./Pagination"

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
	const [selectedRecords, setSelectedRecords] = useState<T[]>([])
	const location = useLocation()
	const paramsSort = location.params.get("sort")
	const paramsDirection = location.params.get("direction") as "asc" | "desc" | null

	const sortStatus = useMemo<DataTableSortStatus<T> | undefined>(() => {
		if(!paramsSort || !paramsDirection) return undefined
		return {
			columnAccessor: paramsSort as keyof T,
			direction: paramsDirection as "asc" | "desc",
		}
	}, [paramsSort, paramsDirection])

	const handleSortStatusChange = (status: DataTableSortStatus<T>) => {
		if(onSortChange) {
			onSortChange(String(status.columnAccessor), status.direction)
			return
		}

		const url = new URL(window.location.href)
		url.searchParams.set("sort", String(status.columnAccessor))
		url.searchParams.set("direction", status.direction)

		router.get(url.toString(), {}, {
			preserveState: true,
			preserveScroll: true,
			replace: true,
		})
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
		<>
			{ /* @ts-ignore - TypeScript cannot narrow discriminated unions when spreading props. This works at runtime. */ }
			<MantineDataTable
				columns={ columns }
				records={ records }
				onSortStatusChange={ handleSortStatusChange }
				emptyState={ <></> }
				renderPagination={ pagination && model
					? () => <Pagination pagination={ pagination } model={ model } />
					: undefined
				}
				classNames={ {
					table: clsx(classes.table, classNames?.table),
					root: classNames?.root,
					header: classNames?.header,
					footer: classNames?.footer,
					pagination: classNames?.pagination,
				} }
				{ ...sortProps }
				{ ...selectionProps }
				{ ...props }
			/>
		</>
	)
}
