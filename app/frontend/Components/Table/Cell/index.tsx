import React from 'react'
import { useTableSectionContext } from '../TableContext'
import { TDProps } from 'react-html-props'
import BodyCell from './BodyCell'
import HeadCell from './HeadCell'

export interface ICellProps extends TDProps {
	checkbox?: boolean
	sort?: string
	nowrap?: boolean
	hideable?: boolean
	ref?: React.RefObject<HTMLTableCellElement>
}

const RenderedCell = ({ children = true, ...props }: ICellProps) => {
	const { section } = useTableSectionContext()

	const CellComponent = section === 'head' ? HeadCell : BodyCell

	return <CellComponent { ...props }>{ children }</CellComponent>
}

export default RenderedCell
