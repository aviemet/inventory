import { Group, Pagination, type PaginationProps } from "@mantine/core"
import clsx from "clsx"

import { Link } from "@/components"

import { LimitSelect } from "./Pagination/LimitSelect"
import * as classes from "./Table.css"
import { useTableContext } from "./TableContext"

const pageLink = (page: number) => {
	const url = new URL(window.location.href)

	if(page === 1) {
		url.searchParams.delete("page")
	} else {
		url.searchParams.set("page", String(page))
	}

	return `${url.pathname}${url.search}`
}

interface PaginationComponentProps extends Omit<PaginationProps, "total"> {
	showLimit?: boolean
}

export function PaginationComponent({
	boundaries = 2,
	siblings = 2,
	showLimit = true,
	className,
	...props
}: PaginationComponentProps) {
	const { pagination, model } = useTableContext()

	if(!pagination) return null

	const { count, pages, limit, current_page, next_page, prev_page } = pagination
	const recordStart = ((current_page - 1) * limit) + 1
	const recordEnd = Math.min(current_page * limit, count)

	return (
		<Group justify="space-between" mt="auto" pt={ 8 }>
			<div>
				{ model && showLimit && (
					<>
						Records per page:
						<LimitSelect
							className={ clsx(classes.limitSelect) }
							pagination={ pagination }
							model={ model }
						/>
					</>
				) }
				Showing <b> { recordStart } - { recordEnd } / { count } </b>
			</div>

			<Pagination.Root
				className={ clsx(className, classes.pagination) }
				total={ pages }
				getItemProps={ (page) => ({
					component: Link,
					href: pageLink(page),
				}) }
				defaultValue={ current_page }
				{ ...props }
			>
				<Group gap={ 7 } justify="center"
					style={ { "a:hover": {
						textDecoration: "none",
					} } }>
					<Pagination.First
						component={ Link }
						href={ pageLink(1) }
						disabled={ current_page === 1 }
					/>

					<Pagination.Previous
						component={ Link }
						href={ pageLink(prev_page) }
						disabled={ prev_page === null }
					/>

					<Pagination.Items />

					<Pagination.Next
						component={ Link }
						href={ pageLink(next_page) }
						disabled={ next_page === null }
					/>

					<Pagination.Last
						component={ Link }
						href={ pageLink(pages) }
						disabled={ current_page === pages }
					/>

				</Group>
			</Pagination.Root>
		</Group>
	)
}

PaginationComponent.displayName = "Table.Pagination"
