import React, { useRef } from 'react'
import { Link } from '@/Components'
import cx from 'clsx'
import { type ICellProps } from './index'
import { useTableContext } from '../TableContext'
import { Box, Flex } from '@mantine/core'
import { useLocation, usePageProps } from '@/lib/hooks'

interface IHeadCellWithContextProps extends ICellProps {
	rows?: Record<string, any>[]
}

const HeadCellWithContext = ({
	children,
	fitContent = false,
	sort,
	nowrap = true,
	rows,
	hideable,
	sx,
	...props
}: IHeadCellWithContextProps) => {
	const { auth: { user: { table_preferences } } } = usePageProps()
	const { tableState: { model } } = useTableContext()
	const { pathname, params } = useLocation()

	const thRef = useRef<HTMLTableCellElement>(null)

	const hideableString = hideable || sort

	if(hideableString !== undefined && model && table_preferences?.[model]?.hide?.[hideableString]) {
		return <></>
	}

	// Build search params for column sorting
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
				{ 'table-column-fit': fitContent },
				{ 'sortable': showSortLink },
				{ [direction]: showSortLink && paramsSort === sort },
			) }
			sx={ {
				whiteSpace: nowrap ? 'nowrap' : 'normal',
				...sx,
			} }
			{ ...props }
		>
			<Flex align="center">
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
			</Flex>
		</Box>
	)
}

export default HeadCellWithContext
