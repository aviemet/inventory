import { Table, TableTdProps } from "@mantine/core"
import clsx from "clsx"
import { forwardRef } from "react"

interface TdProps extends TableTdProps {
	fitContent?: boolean
	nowrap?: boolean
}

export const Td = forwardRef<HTMLTableCellElement, TdProps>(({
	children,
	fitContent = false,
	nowrap = false,
	className,
	...props
}, ref) => {
	return (
		<Table.Td
			ref={ ref }
			className={ clsx(className, { "table-column-fit": fitContent }, { "nowrap": nowrap }) }
			role="cell"
			{ ...props }
		>
			{ children }
		</Table.Td>
	)
})
