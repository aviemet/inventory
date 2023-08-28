import React, { useMemo } from 'react'
import { useTableContext, useTableSectionContext } from '../TableContext'
import { TDProps } from 'react-html-props'
import BodyCell from './BodyCell'
import HeadCell from './HeadCell'
import { type BoxProps } from '@mantine/core'
import { usePageProps } from '@/lib/hooks'
import { type Sx } from '@mantine/core'

export interface ICellProps extends TDProps, BoxProps {
	fitContent?: boolean
	sort?: string
	nowrap?: boolean
	hideable?: false|string
	ref?: React.RefObject<HTMLTableCellElement>
	sx?: Sx
}

const RenderedCell = ({ children = true, hideable, sort, ...props }: ICellProps) => {
	const { section } = useTableSectionContext()
	const { tableState: { model } } = useTableContext()
	const { auth: { user: { table_preferences } } } = usePageProps()

	const hiddenByUser = useMemo(() => {
		const hideableString = hideable || sort
		return hideableString !== undefined && model && table_preferences?.[model]?.hide?.[hideableString]
	}, [hideable, model, sort, table_preferences])

	if(hiddenByUser) return <></>

	if(section === 'head') {
		return <HeadCell hideable={ hideable } sort={ sort } { ...props }>{ children }</HeadCell>
	}

	return <BodyCell { ...props }>{ children }</BodyCell>
}

export default RenderedCell
