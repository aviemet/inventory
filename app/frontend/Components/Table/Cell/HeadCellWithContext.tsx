import React, { useMemo, useRef } from 'react'
import { Link, Box, Flex } from '@/Components'
import cx from 'clsx'
import { type ICellProps } from './index'
import { useLocation } from '@/lib/hooks'

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
	const thRef = useRef<HTMLTableCellElement>(null)
	const { pathname, params } = useLocation()

	const localParams = new URLSearchParams(params)

	const paramsSort = localParams.get('sort')
	const paramsDirection = localParams.get('direction')

	const direction = paramsSort === sort && paramsDirection === 'asc' ? 'desc' : 'asc'

	const showSortLink: boolean = sort !== undefined && rows!.length > 1

	// Use URLSearchParams object to build sort link per head cell
	const sortLink = useMemo(() => {
		if(!showSortLink) return undefined

		if(sort === undefined) {
			localParams.delete('sort')
			return undefined
		}

		localParams.set('sort', sort)

		localParams.set('direction', direction)

		return `${pathname}?${localParams.toString()}`

		// Including `localParams` in the dependency array would cause the link to update with every render.
		// Excluding is the best way to achieve performant desired results
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [showSortLink, sort, direction, pathname])

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
				{ showSortLink && sortLink ?
					<Link
						href={ sortLink }
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
