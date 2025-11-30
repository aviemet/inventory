import { Table } from "@mantine/core"
import cx from "clsx"
import React, { useRef } from "react"

import { Link, Flex } from "@/components"
import { useLocation } from "@/lib/hooks"

import { type TableRowData } from "../TableContext"

import { type TableHeadCellProps } from "."

interface HeadCellWithContextProps extends TableHeadCellProps {
	rows?: readonly TableRowData[]
}

const HeadCellWithContext = ({
	children,
	fitContent = false,
	sort,
	rows,
	hideable,
	...props
}: HeadCellWithContextProps) => {
	const thRef = useRef<HTMLTableCellElement>(null)
	const { pathname, params } = useLocation()

	const localParams = new URLSearchParams(params)

	const paramsSort = localParams.get("sort")
	const paramsDirection = localParams.get("direction")

	const direction = paramsSort === sort && paramsDirection === "asc" ? "desc" : "asc"

	const showSortLink: boolean = sort !== undefined && rows!.length > 1

	let sortLink: string | undefined
	if(showSortLink && sort !== undefined) {
		const sortParams = new URLSearchParams(params)
		sortParams.set("sort", sort)
		sortParams.set("direction", direction)
		sortLink = `${pathname}?${sortParams.toString()}`
	}

	return (
		<Table.Th
			ref={ thRef }
			className={ cx(
				{ "table-column-fit": fitContent },
				{ "sortable": showSortLink },
				{ [direction]: showSortLink && paramsSort === sort },
			) }
			{ ...props }
		>
			<Flex align="center">
				{ showSortLink && sortLink ?
					<Link
						href={ sortLink }
						preserveScroll={ true }
					>
						{ children }
					</Link>
					:
					children
				}
			</Flex>
		</Table.Th>
	)
}

export default HeadCellWithContext
