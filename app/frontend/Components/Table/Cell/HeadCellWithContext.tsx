import React, { useEffect } from 'react'
import { Link } from '@inertiajs/inertia-react'
import { THProps } from 'react-html-props'
import cn from 'classnames'
import { type ICellProps } from './index'
import { useTableContext } from '../TableContext'

interface IHeadCellWithContextProps extends ICellProps {
	rows?: Record<string, any>[]
}

const HeadCellWithContext = ({ children, checkbox = false, sort, nowrap, rows, hideable = true, ...props }: IHeadCellWithContextProps) => {
	const { tableState: { columns }, setTableState } = useTableContext()

	useEffect(() => {
		if(sort && hideable && !columns.has(sort)) {
			columns.set(sort, String(children))
			setTableState({ columns })
		}
	}, [])

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
		<Th
			className={ cn(
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
		</Th>
	)
}

/**
 * react-html-props doesn't seem to think that nowrap is a valid prop for table cells
 */
interface Th extends THProps {
	nowrap?: string
}

const Th = ({ children, ...props }: Th) => <th { ...props }>{ children }</th>

export default HeadCellWithContext
