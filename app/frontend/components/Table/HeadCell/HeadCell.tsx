import { Table } from "@mantine/core"
import clsx from "clsx"
import React, { useEffect, forwardRef } from "react"

import { Link, Flex } from "@/components"
import { useLocation, usePageProps } from "@/lib/hooks"

import { useTableContext } from "../TableContext/TableContext"

export interface HeadCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
	columnId?: string
	children: React.ReactNode
	sort?: string
	hideable?: string | false
	fitContent?: boolean
}

export const HeadCell = forwardRef<HTMLTableCellElement, HeadCellProps>(({
	children,
	columnId,
	sort,
	hideable,
	fitContent = false,
	className,
	...props
}, ref) => {
	const context = useTableContext(false)
	const { auth: { user: { table_preferences } } } = usePageProps()
	const { pathname, params } = useLocation()

	const registerColumn = context?.registerColumn

	useEffect(() => {
		if(!registerColumn || !columnId) return

		const label = typeof children === "string" ? children : String(children)
		registerColumn({
			id: columnId,
			label,
			hideable: hideable === false ? undefined : (hideable || sort),
			sort,
		})
	}, [registerColumn, columnId, children, hideable, sort])

	if(!context || !columnId) {
		return (
			<Table.Th
				ref={ ref }
				className={ clsx(className, { "table-column-fit": fitContent }) }
				{ ...props }
			>
				{ children }
			</Table.Th>
		)
	}

	const { columns, model, pagination } = context

	const column = columns.get(columnId)
	const hideableString = hideable === false ? undefined : (hideable || sort || column?.hideable)
	const hiddenByUser = hideableString && model && table_preferences?.[model]?.hide?.[hideableString]

	if(hiddenByUser) return null

	const localParams = new URLSearchParams(params)
	const paramsSort = localParams.get("sort")
	const paramsDirection = localParams.get("direction")
	const direction = paramsSort === sort && paramsDirection === "asc" ? "desc" : "asc"
	const showSortLink = sort !== undefined && (!pagination || (pagination.count > 1))

	let sortLink: string | undefined
	if(showSortLink && sort !== undefined) {
		const sortParams = new URLSearchParams(params)
		sortParams.set("sort", sort)
		sortParams.set("direction", direction)
		sortLink = `${pathname}?${sortParams.toString()}`
	}

	return (
		<Table.Th
			ref={ ref }
			className={ clsx(
				className,
				{ "table-column-fit": fitContent },
				{ "sortable": showSortLink },
				{ [direction]: showSortLink && paramsSort === sort },
			) }
			{ ...props }
		>
			<Flex align="center">
				{ showSortLink && sortLink ?
					<Link href={ sortLink } preserveScroll={ true }>
						{ children }
					</Link>
					:
					children
				}
			</Flex>
		</Table.Th>
	)
})

HeadCell.displayName = "Table.HeadCell"
