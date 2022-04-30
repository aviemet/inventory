import React from 'react'
import PageLink from './PageLink'

interface INextPageTagsProps {
	currentPage: number
	nextPage: number
	lastPage: number
}

const NextPageTags = ({ currentPage, nextPage, lastPage }: INextPageTagsProps) => {
	return (
		<>
			<div className="next">
				<PageLink currentPage={ currentPage } page={ nextPage }>›</PageLink>
			</div>
			<div className="last">
				<PageLink currentPage={ currentPage } page={ lastPage }>»</PageLink>
			</div>
		</>
	)
}

export default NextPageTags
