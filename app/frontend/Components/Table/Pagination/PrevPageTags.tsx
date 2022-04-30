import React from 'react'
import PageLink from './PageLink'

interface IPrevPageTagsProps {
	currentPage: number
	prevPage: number
}

const PrevPageTags = ({ currentPage, prevPage }: IPrevPageTagsProps) => {
	return (
		<>
			<div className="first">
				<PageLink currentPage={ currentPage } page={ 1 }>«</PageLink>
			</div>
			<div className="prev">
				<PageLink currentPage={ currentPage } page={ prevPage }>‹</PageLink>
			</div>
		</>
	)
}

export default PrevPageTags
