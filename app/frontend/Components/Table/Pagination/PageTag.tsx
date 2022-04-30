import React from 'react'
import PageLink from './PageLink'
import cx from 'classnames'

interface IPageTage {
	page: number
	currentPage: number
}

const PageTag = ({ page, currentPage }: IPageTage) => {
	const current = currentPage === page

	return (
		<div className={ cx('page', { current }) }>
			{ current ?
				<span>{ page }</span>
				: <PageLink page={ page } currentPage={ currentPage } />
			}
		</div>
	)
}

export default PageTag
