import { Box, Table as MantineTable, type TableProps as MantineTableProps } from "@mantine/core"
import clsx from "clsx"

import { ConditionalWrapper } from "../ConditionalWrapper"
import * as classes from "./Table.css"

export interface TableProps extends Omit<MantineTableProps, "children"> {
	wrapper?: boolean
	fixed?: boolean
	children?: React.ReactNode
}

const TableBase = ({
	children,
	className,
	wrapper = true,
	fixed = false,
	striped = true,
	highlightOnHover = true,
	...props
}: TableProps) => {
	return (
		<ConditionalWrapper
			condition={ wrapper }
			wrapper={ children => <Box className={ classes.wrapper }>{ children }</Box> }
		>
			<MantineTable
				striped={ striped }
				highlightOnHover={ highlightOnHover }
				className={ clsx(className, classes.table, fixed && "layout-fixed") }
				{ ...props }
			>
				{ children }
			</MantineTable>
		</ConditionalWrapper>
	)
}

export const Table = TableBase
