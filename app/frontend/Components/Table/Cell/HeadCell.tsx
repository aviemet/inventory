import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import { useTableContext } from '../TableContext'
import { THProps } from 'react-html-props'
import classnames from 'classnames'
import { type ICellProps } from './index'

const HeadCell = ({ children, ...props }: ICellProps) => {
	try {
		const { tableState: { rows } } = useTableContext()
		return <CellWithContext { ...props } rows={ rows }>{ children }</CellWithContext>
	} catch(e) {
		return <NormalCell { ...props }>{ children }</NormalCell>
	}
}

export default HeadCell

interface ICellWithContextProps extends ICellProps {
	rows?: Record<string, any>[]
}

const CellWithContext = ({ children, checkbox = false, sort, nowrap, rows, ...props }: ICellWithContextProps) => {
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
		</Th>
	)
}

const NormalCell = ({ children, ...props }) => {
	return (
		<th>{ children }</th>
	)
}

/**
 * react-html-props doesn't seem to think that nowrap is a valid prop for table cells
 */
interface Th extends THProps {
	nowrap?: string
}

const Th = ({ children, ...props }) => <th { ...props }>{ children }</th>