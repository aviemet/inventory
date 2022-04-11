import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import { useTableSectionContext, useTableContext } from './TableContext'
import { TDProps } from 'react-html-props'
import classnames from 'classnames'

interface ICellProps extends TDProps {
	checkbox?: boolean
	sort?: string
	nowrap?: boolean
}

const Cell = ({ children, checkbox = false, sort, nowrap = false, ...props }: ICellProps) => {
	const { tableState: { rows } } = useTableContext()

	const { origin, pathname, search } = window.location

	const params = new URLSearchParams(search)
	const paramsSort = params.get('sort')
	const paramsDirection = params.get('direction')

	if(sort) {
		params.set('sort', sort)
	} else {
		params.delete('sort')
	}

	const direction = paramsSort === sort && paramsDirection === 'asc' ? 'desc' : 'asc'
	params.set('direction', direction)

	const showSortLink = sort && rows!.length > 1

	return (
		<RenderedCell
			className={ classnames(
				{ 'table-column-fit': checkbox },
				{ 'sortable': showSortLink },
				{ [direction]: showSortLink && paramsSort === sort }
			) }
			nowrap={ nowrap ? 'nowrap' : '' }
			{ ...props }
		>
			{ showSortLink ?
				<Link
					href={ `${origin}${pathname}?${params.toString()}` }
					preserveScroll={ true }
				>{ children }</Link>
				: children
			}
		</RenderedCell>
	)
}

export default Cell

interface IRenderedCellProps extends TDProps {
	nowrap?: string
}

const RenderedCell = ({ children, ...props }: IRenderedCellProps): JSX.Element => {
	const { section } = useTableSectionContext()

	const element = section === 'head' ? 'th' : 'td'

	return React.createElement(element, props, children)
}
