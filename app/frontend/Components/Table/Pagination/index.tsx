import React from 'react'
import { router, usePage } from '@inertiajs/react'
import Link from '@/Components/Link'
import { useTableContext } from '../TableContext'
import { Group, Pagination, Select, type PaginationProps } from '@mantine/core'
import axios from 'axios'
import { Routes } from '@/lib'
import LimitSelect from './LimitSelect'

const pageLink = (page: number) => {
	const url = new URL(window.location.href)

	if(page === 1) {
		url.searchParams.delete('page')
	} else {
		url.searchParams.set('page', String(page))
	}

	return `${url.pathname}${url.search}`
}

interface IPaginationComponent extends Omit<PaginationProps, 'total'> {}

const PaginationComponent = ({ boundaries = 2, siblings = 2, ...props }: IPaginationComponent) => {
	const { auth: { user } } = usePage<SharedInertiaProps>().props
	const { tableState: { pagination, model } } = useTableContext()

	if(!pagination) return <></>

	const { count, pages, limit, current_page, next_page, prev_page, is_first_page, is_last_page } = pagination
	const recordStart = ((current_page - 1) * limit) + 1
	const recordEnd = Math.min(current_page * limit, count)


	return (
		<Group position="apart" mt="auto" pt={ 8 }>
			<div>
				{ model && <>Records per page: <LimitSelect pagination={ pagination } model={ model } /></> }
        Showing <b> { recordStart } - { recordEnd } / { count } </b>
			</div>

			<Pagination.Root
				total={ pages }
				getItemProps={ (page) => ({
					component: Link,
					href: pageLink(page),
				}) }
				defaultValue={ current_page }
				{ ...props }
			>
				<Group spacing={ 7 } position="center"
					sx={ { 'a:hover': {
						textDecoration: 'none',
					} } }>
					<Pagination.First component={ Link } href={ pageLink(1) } />
					<Pagination.Previous component={ Link } href={ pageLink(next_page) } />
					<Pagination.Items />
					<Pagination.Next component={ Link } href={ pageLink(prev_page) } />
					<Pagination.Last component={ Link } href={ pageLink(pages) } />
				</Group>
			</Pagination.Root>
		</Group>
	)
}

export default PaginationComponent
