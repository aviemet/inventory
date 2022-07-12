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

const HeadCellWithContext = ({ children, checkbox = false, sort, nowrap = true, rows, hideable, ...props }: IHeadCellWithContextProps) => {
	const { props: { auth: { user: { table_preferences } } } } = usePage<InertiaPage>()
	const { tableState: { columns, model }, setTableState } = useTableContext()

	const thRef = useRef<HTMLTableCellElement>(null)

	const hideableString = hideable || sort

	// Register hideable object with table context for column
	useEffect(() => {
		if(hideable === false) return

		if(hideableString !== undefined && !columns.has(hideableString)) {
			columns.set(hideableString, String(children))
			setTableState({ columns })
		}
	}, [])

	if(hideableString !== undefined && model && table_preferences?.[model]?.hide?.[hideableString]) {
		return <></>
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
