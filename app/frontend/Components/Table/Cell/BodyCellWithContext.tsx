import React, { useRef } from 'react'
import cx from 'clsx'
import { type ICellProps } from './index'
import { usePage } from '@inertiajs/inertia-react'
import { Box } from '@mantine/core'

export interface IBodyCellProps extends Omit<ICellProps, 'hideable'> {
	hideable?: false|string
	model?: string
}

const BodyCell = ({ children, nowrap, fitContent, hideable, model, sx, ...props }: IBodyCellProps) => {
	const { props: { auth: { user: { table_preferences } } } } = usePage<InertiaPage>()
	const tdRef = useRef<HTMLTableCellElement>(null)

	if(hideable && model && table_preferences?.[model]?.hide?.[hideable]) {
		return <></>
	}

	return (
		<Box
			component="td"
			ref={ tdRef }
			className={ cx({ 'table-column-fit': fitContent }) }
			sx={ {
				whiteSpace: nowrap ? 'nowrap' : 'normal',
				...sx,
			} }
			{ ...props }
		>
			{ children }
		</Box>
	)
}

export default BodyCell
