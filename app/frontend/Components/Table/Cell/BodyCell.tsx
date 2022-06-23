import React, { useRef } from 'react'
import cn from 'classnames'
import { type ICellProps } from './index'
import { useTableContext } from '../TableContext'
import { usePage } from '@inertiajs/inertia-react'
import { Box } from '@mantine/core'

export interface IBodyCellProps extends Omit<ICellProps, 'hideable'> {
	hideable?: string
}

const BodyCell = ({ children, nowrap, checkbox, hideable, ...props }: IBodyCellProps) => {
	const { props: { auth: { user: { table_preferences } } } } = usePage<InertiaPage>()
	const { tableState: { model } } = useTableContext()
	const tdRef = useRef<HTMLTableCellElement>(null)

	if(hideable && model && table_preferences?.[model]?.hide?.[hideable]) {
		return <></>
	}

	return (
		<Box
			component="td"
			ref={ tdRef }
			className={ cn({ 'table-column-fit': checkbox }) }
			sx={ {
				whiteSpace: nowrap ? 'nowrap' : 'normal',
			} }
			{ ...props }
		>
			{ children }
		</Box>
	)
}

export default BodyCell
