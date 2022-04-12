import React from 'react'
import { useTableContext } from '../TableContext'
import PrevPageTags from './PrevPageTags'
import NextPageTags from './NextPageTags'
import PageTag from './PageTag'

const Pagination = () => {
	const { tableState: { pagination } } = useTableContext()

	if(!pagination) return <></>

	const {
		count,
		pages,
		limit,
		current_page,
		next_page,
		prev_page,
		is_first_page,
		is_last_page,
	} = pagination

	const recordStart = ((current_page - 1) * limit) + 1
	const recordEnd = Math.min(current_page * limit, count)

	return (
		<div className="flex pt-3" id="pagination">
			<div className="flex-1">
        Showing <b>{ recordStart } - { recordEnd } / { count }</b>
			</div>

			<div className="flex-1">
				<nav className="pagination">
					{ !is_first_page && <PrevPageTags
						currentPage={ current_page }
						prevPage={ prev_page }
					/> }

					{ Array(pages).fill('').map((_, i) => (
						<PageTag
							key={ i }
							page={ i + 1 }
							currentPage={ current_page }
						/>
					) ) }

					{ !is_last_page && <NextPageTags
						currentPage={ current_page }
						nextPage={ next_page }
						lastPage={ pages }
					/> }
				</nav>
			</div>

		</div>
	)
}

export default Pagination
