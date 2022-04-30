import React from 'react'
import { Link } from '@inertiajs/inertia-react'

interface IPageLinkProps {
	children?: React.ReactNode
	page: number
	currentPage: number
}

const PageLink = ({ children, page, currentPage }: IPageLinkProps) => {
	const url = new URL(window.location.href)

	if(page === 1) {
		url.searchParams.delete('page')
	} else {
		url.searchParams.set('page', String(page))
	}

	const props: { rel?: 'next'|'prev' } = {}
	if(currentPage + 1 === page) {
		props.rel = 'next'
	} else if(currentPage - 1 === page) {
		props.rel = 'prev'
	}

	return (
		<Link href={ url.toString() } { ...props }>
			{ children ? children : page }
		</Link>
	)
}

export default PageLink
