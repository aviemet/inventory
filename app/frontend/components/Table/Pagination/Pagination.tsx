import {
	Group,
	Pagination as MantinePagination,
	type PaginationProps as MantinePaginationProps,
} from "@mantine/core"
import clsx from "clsx"

import { Link } from "@/components"

import { LimitSelect } from "./LimitSelect"
import * as classes from "../Table.css"
import { useTableContext } from "../TableContext/TableContext"

const pageLink = (page: number) => {
	const url = new URL(window.location.href)

	if(page === 1) {
		url.searchParams.delete("page")
	} else {
		url.searchParams.set("page", String(page))
	}

	return `${url.pathname}${url.search}`
}

interface PaginationProps extends Omit<MantinePaginationProps, "total"> {
	total?: number
	currentPage?: number
	pageSize?: number
	totalRecords?: number
	onPageChange?: (page: number) => void
	showLimit?: boolean
	model?: string
}

export function Pagination({
	boundaries = 2,
	siblings = 2,
	showLimit = true,
	className,
	total: totalPages,
	currentPage,
	pageSize,
	totalRecords,
	onPageChange,
	model: modelProp,
	...props
}: PaginationProps) {
	const context = useTableContext(false)

	const pagination = context?.pagination
	const model = modelProp ?? context?.model

	const total = totalPages ?? pagination?.pages
	const current = currentPage ?? pagination?.current_page
	const limit = pageSize ?? pagination?.limit
	const count = totalRecords ?? pagination?.count

	if(!total || !current || !limit) return null

	const recordStart = ((current - 1) * limit) + 1
	const recordEnd = Math.min(current * limit, count ?? 0)
	const nextPage = current < total ? current + 1 : null
	const prevPage = current > 1 ? current - 1 : null

	const handlePageLink = (page: number) => {
		if(onPageChange) {
			onPageChange(page)
			return "#"
		}
		return pageLink(page)
	}

	return (
		<Group justify="space-between" mt="auto" pt={ 8 }>
			<div>
				{ model && showLimit && pagination && (
					<>
						Records per page:
						<LimitSelect
							className={ clsx(classes.limitSelect) }
							pagination={ pagination }
							model={ model }
						/>
					</>
				) }
				{ count !== undefined && (
					<>Showing <b> { recordStart } - { recordEnd } / { count } </b></>
				) }
			</div>

			<MantinePagination
				className={ clsx(className, classes.pagination) }
				autoContrast
				total={ total }
				value={ current }
				onChange={ onPageChange }
				getItemProps={ (page) => ({
					component: onPageChange ? "button" : Link,
					href: onPageChange ? undefined : handlePageLink(page),
					onClick: onPageChange ? () => onPageChange(page) : undefined,
				}) }
				getControlProps={ (control: "first" | "last" | "next" | "previous") => {
					if(control === "first") {
						return {
							component: (onPageChange ? "button" : Link) as "button" | typeof Link,
							href: onPageChange ? undefined : handlePageLink(1),
							onClick: onPageChange ? () => onPageChange(1) : undefined,
							disabled: current === 1,
						}
					}

					if(control === "previous") {
						return {
							component: (onPageChange ? "button" : Link) as "button" | typeof Link,
							href: onPageChange ? undefined : (prevPage ? handlePageLink(prevPage) : undefined),
							onClick: onPageChange && prevPage ? () => onPageChange(prevPage) : undefined,
							disabled: prevPage === null,
						}
					}

					if(control === "next") {
						return {
							component: (onPageChange ? "button" : Link) as "button" | typeof Link,
							href: onPageChange ? undefined : (nextPage ? handlePageLink(nextPage) : undefined),
							onClick: onPageChange && nextPage ? () => onPageChange(nextPage) : undefined,
							disabled: nextPage === null,
						}
					}

					if(control === "last") {
						return {
							component: (onPageChange ? "button" : Link) as "button" | typeof Link,
							href: onPageChange ? undefined : handlePageLink(total),
							onClick: onPageChange ? () => onPageChange(total) : undefined,
							disabled: current === total,
						}
					}

					return {}
				} }
				boundaries={ boundaries }
				siblings={ siblings }
				{ ...props }
			/>
		</Group>
	)
}
