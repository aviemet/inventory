import React, { useRef } from 'react'
import cn from 'classnames'
import { type ICellProps } from './index'
import { useTableContext } from '../TableContext'
import { usePage } from '@inertiajs/inertia-react'
import { Box } from '@mantine/core'

const BodyCell = ({ children, nowrap, checkbox, ...props }: ICellProps) => {
	const { props: { auth: { user: { table_preferences } } } } = usePage<InertiaPage>()
	const { tableState: { columns, model } } = useTableContext()
	const tdRef = useRef<HTMLTableCellElement>(null)

	let hidden = false
	if(model && tdRef.current?.dataset?.index && columns.size > 0) {
		for(let [name, { index }] of columns.entries()) {
			if(index === tdRef.current.dataset.index && table_preferences?.[model]?.hide?.[name]) {
				hidden = true
			}
		}
	}

	return (
		<Box
			component="td"
			ref={ tdRef }
			className={ cn({ 'table-column-fit': checkbox }) }
			sx={ {
				display: hidden ? 'none' : 'table-cell',
				whiteSpace: nowrap ? 'nowrap' : 'normal',
			} }
			{ ...props }
		>
			{ children }
		</Box>
	)
}

export default BodyCell
