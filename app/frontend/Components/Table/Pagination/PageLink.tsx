import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import { useTableContext } from '../TableContext'

interface IPageLinkProps {
	children?: React.ReactNode
	page: number
	currentPage: number
}

const PageLink = ({ children, page, currentPage }: IPageLinkProps) => {
	const { tableState: { url } } = useTableContext()
	const{ base, params } = url

	if(page === 1) {
		params.delete('page')
	} else {
		params.set('page', String(page))
	}

	const props: { rel?: 'next'|'prev' } = {}
	if(currentPage + 1 === page) {
		props.rel = 'next'
	} else if(currentPage - 1 === page) {
		props.rel = 'prev'
	}

	return (
		<Link href={ `${base}?${params.toString()}` } { ...props }>
			{ children ? children : page }
		</Link>
	)
}

export default PageLink
