import React, { useEffect, useRef } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import cn from 'classnames'
import { type ICellProps } from './index'
import { useTableContext } from '../TableContext'

interface IHeadCellWithContextProps extends ICellProps {
	rows?: Record<string, any>[]
}

const HeadCellWithContext = ({ children, checkbox = false, sort, nowrap, rows, hideable = true, ...props }: IHeadCellWithContextProps) => {
	const { props: { auth: { user: { table_preferences } } } } = usePage<InertiaPage>()
	const { tableState: { columns, model }, setTableState } = useTableContext()

	const thRef = useRef<HTMLTableCellElement>(null)

	useEffect(() => {
		if(hideable && sort && !columns.has(sort)) {
			columns.set(sort, { label: String(children), index: thRef.current?.dataset?.index })
			setTableState({ columns })
		}
	}, [])

	let hidden = false
	if(hideable && sort && model && table_preferences?.[model]?.hide?.[sort]) {
		hidden = true
	}

	const { pathname, search } = window.location

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
		<th
			className={ cn(
				{ 'table-column-fit': checkbox },
				{ 'sortable': showSortLink },
				{ [direction]: showSortLink && paramsSort === sort },
				{ 'whitespace-nowrap': nowrap },
				{ 'hidden': hidden }
			) }
			ref={ thRef }
			{ ...props }
		>
			{ showSortLink ?
				<Link
					href={ `${pathname}?${params.toString()}` }
					preserveScroll={ true }
				>
					{ children }
				</Link>
				:
				children
			}
		</th>
	)
}

export default React.memo(HeadCellWithContext)
