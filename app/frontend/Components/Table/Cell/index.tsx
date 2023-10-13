import React from 'react'
import { useTableContext, useTableSectionContext } from '../TableContext'
import { TDProps } from 'react-html-props'
import BodyCell from './BodyCell'
import HeadCell from './HeadCell'
import { type BoxProps } from '@mantine/core'
import { usePageProps } from '@/lib/hooks'

export interface ICellProps extends TDProps, BoxProps {
	fitContent?: boolean
	sort?: string
	nowrap?: boolean
	hideable?: false|string
	ref?: React.RefObject<HTMLTableCellElement>
}

const RenderedCell = ({ children = true, hideable, sort, ...props }: ICellProps) => {
	const { auth: { user: { table_preferences } } } = usePageProps()

	const tableSectionState = useTableSectionContext(false)
	const tableState = useTableContext(false)

	let hiddenByUser: boolean = false

	if(tableState !== null) {
		const { tableState: { model } } = tableState

		const hideableString = hideable || sort
		if(hideableString !== undefined && model !== undefined) {
			hiddenByUser = table_preferences?.[model]?.hide?.[hideableString]
		}
	}

	if(hiddenByUser) return <></>

	if(tableSectionState !== null && tableSectionState.section === 'head') {
		return <HeadCell hideable={ hideable } sort={ sort } { ...props }>{ children }</HeadCell>
	}

	return <BodyCell { ...props }>{ children }</BodyCell>
}

export default RenderedCell
