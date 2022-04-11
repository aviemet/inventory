import React from 'react'
import { useTableSectionContext } from './Table'
import { TDProps } from 'react-html-props'
import classnames from 'classnames'

interface ICellProps extends TDProps {
	checkbox?: boolean
}

const Cell = ({ children, checkbox = false, ...props }: ICellProps) => {
	return (
		<RenderedCell { ...props } className={ classnames({ 'w-0': checkbox }) }>
			{ children }
		</RenderedCell>
	)
}

const RenderedCell = ({ children, ...props }: TDProps) => {
	const { section } = useTableSectionContext()

	const element = section === 'head' ? 'th' : 'td'

	return React.createElement(element, props, children)
}

export default Cell
