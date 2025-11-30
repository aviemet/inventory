import { Table } from "@mantine/core"
import React, { useEffect, forwardRef } from "react"

import { coerceArray } from "@/lib"
import { useCheckboxState } from "@/lib/hooks"

import HeadCheckbox from "./HeadCheckbox"
import { useTableContext } from "../TableContext"

import { RowBaseProps } from "./index"

interface HeadRowProps extends RowBaseProps {}

const HeadRow = forwardRef<HTMLTableRowElement, HeadRowProps>((
	{ children, name, rows, selectable, selected, ...props },
	ref,
) => {
	const { setTableState } = useTableContext()

	let { length, selectedCount } = { length: 0, selectedCount: 0 }
	if(selectable) {
		length = rows?.length || 0
		selectedCount = selected.size || 0
	}
	const { allChecked, indeterminate } = useCheckboxState(length, selectedCount)

	// Register hideable attributes in context
	useEffect(() => {
		if(!children) return

		const newColumns = coerceArray(children).map(({ props }) => ({
			label: props.children,
			hideable: (props.hideable ?? props.sort) ?? false,
		}))

		setTableState({ columns: newColumns })
	}, [children, setTableState])

	return (
		<Table.Tr { ...props } ref={ ref }>
			{ selectable && <HeadCheckbox
				rows={ rows }
				selected={ selected }
				allChecked={ allChecked }
				indeterminate={ indeterminate }
			/> }
			{ children }
		</Table.Tr>
	)
})

export default HeadRow
