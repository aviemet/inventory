import React from 'react'
import { TDProps } from 'react-html-props'
import cx from 'classnames'
import { type ICellProps } from './index'

const BodyCell = ({ children, nowrap, checkbox, ...props }: ICellProps) => {
	return (
		<Td
			className={ cx({ 'table-column-fit': checkbox }) }
			nowrap={ nowrap ? 'nowrap' : '' }
			{ ...props }
		>
			{ children }
		</Td>
	)
}

export default BodyCell

/**
 * react-html-props doesn't seem to think that nowrap is a valid prop for table cells
 */
interface Td extends TDProps {
	nowrap?: string
}

const Td = ({ children, ...props }) => <td { ...props }>{ children }</td>
