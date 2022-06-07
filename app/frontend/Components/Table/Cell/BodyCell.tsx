import React, { useRef } from 'react'
import cn from 'classnames'
import { type ICellProps } from './index'
import { useTableContext } from '../TableContext'
import { usePage } from '@inertiajs/inertia-react'

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
		<td
			className={ cn(
				{ 'table-column-fit': checkbox },
				{ 'whitespace-nowrap': nowrap },
				{ 'hidden': hidden }
			) }
			ref={ tdRef }
			{ ...props }
		>
			{ children }
		</td>
	)
}

export default BodyCell
