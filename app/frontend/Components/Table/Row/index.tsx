import React, { Children } from 'react'
import { useTableContext } from '../TableContext'
import { TRProps } from 'react-html-props'
import RowInContext from './RowInContext'

interface IRowProps extends Omit<TRProps, 'children'|'ref'> {
	children?: React.ReactElement<any, string | React.JSXElementConstructor<any>>[]
	render?: any
	name?: string
}

const Row = ({ children, render, name, ...props }: IRowProps) => {
	try{
		const { tableState: { rows, selectable, selected, hideable } } = useTableContext()

		return (
			<RowInContext name={ name } rows={ rows } selectable={ selectable } selected={ selected } { ...props }>
				{ hideable ? (
					// Inject data attribute to allow dynamically hiding columns
					children && Children.map(children, (child, index) => {
						return React.cloneElement(child, {
							'data-index': index
						})
					})
				)
					: children
				}
			</RowInContext>
		)
	} catch(e) {
		return (
			<tr { ...props }>
				{ children }
			</tr>
		)
	}
}

export default React.memo(Row)
