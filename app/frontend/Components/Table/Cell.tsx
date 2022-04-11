import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import { useTableSectionContext, useTableContext } from './TableContext'
import { TDProps } from 'react-html-props'
import classnames from 'classnames'

interface ICellProps extends TDProps {
	checkbox?: boolean
	sort?: string
}

const Cell = ({ children, checkbox = false, sort, ...props }: ICellProps) => {
	const { tableState: { rows } } = useTableContext()

	const { origin, pathname, search } = window.location

	const params = new URLSearchParams(search)
	const paramsSort = params.get('sort')
	const paramsDirection = params.get('direction')

	const direction = paramsSort === sort && paramsDirection === 'asc' ? 'desc' : 'asc'

	const showSortLink = sort && rows!.length > 1

	return (
		<RenderedCell
			className={ classnames(
				{ 'table-column-fit': checkbox },
				{ 'sortable': showSortLink },
				{ [direction]: showSortLink && paramsSort === sort }
			) }
			{ ...props }
		>
			{ showSortLink ?
				<Link
					href={ `${origin}${pathname}?sort=${sort}&direction=${direction}` }
				>{ children }</Link>
				: children
			}
		</RenderedCell>
	)
}

export default Cell

const RenderedCell = ({ children, ...props }: TDProps) => {
	const { section } = useTableSectionContext()

	const element = section === 'head' ? 'th' : 'td'

	return React.createElement(element, props, children)
}
