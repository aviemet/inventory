import React, { useEffect, useRef } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import cx from 'clsx'
import { type ICellProps } from './index'
import { useTableContext } from '../TableContext'
import { Box } from '@mantine/core'

interface IHeadCellWithContextProps extends ICellProps {
	rows?: Record<string, any>[]
}

const HeadCellWithContext = ({ children, checkbox = false, sort, nowrap, rows, hideable = true, ...props }: IHeadCellWithContextProps) => {
	const { props: { auth: { user: { table_preferences } } } } = usePage<InertiaPage>()
	const { tableState: { columns, model }, setTableState } = useTableContext()

	const thRef = useRef<HTMLTableCellElement>(null)

	// Register hideable object with table context for column
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

	// Build search params for column sorting
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
		<Box
			component="th"
			ref={ thRef }
			className={ cx(
				{ 'table-column-fit': checkbox },
				{ 'sortable': showSortLink },
				{ [direction]: showSortLink && paramsSort === sort },
			) }
			sx={ {
				display: hidden ? 'none' : 'table-cell',
				whiteSpace: nowrap ? 'nowrap' : 'normal',
			} }
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
		</Box>
	)
}

export default HeadCellWithContext
