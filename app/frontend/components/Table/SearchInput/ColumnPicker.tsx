import { Button } from "@mantine/core"
import clsx from "clsx"
import React from "react"

import { Menu } from "@/components"
import { ColumnsIcon } from "@/components/Icons"
import { Checkbox } from "@/components/Inputs"

import * as classes from "./SearchInput.css"
import { useTableContext } from "../TableContext/TableContext"

export function ColumnPicker() {
	const context = useTableContext(false)

	if(!context || !context.hideable || !context.model) return null

	const { table } = context

	let allColumns
	try {
		allColumns = table.getAllColumns()
	} catch{
		return null
	}

	if(!allColumns || allColumns.length === 0) return null

	const columns = allColumns.filter(col => {
		const meta = (col.columnDef.meta || {}) as { hideable?: string | false }
		return meta.hideable !== false && col.id !== "select"
	})

	const handleChange = (columnId: string, checked: boolean) => {
		table.getColumn(columnId)?.toggleVisibility(checked)
	}

	return (
		<Menu closeOnItemClick={ false } position="bottom-end">
			<Menu.Target>
				<Button size="md" p="xs" className={ clsx(classes.columnPickerButton) }>
					<ColumnsIcon size={ 24 } />
				</Button>
			</Menu.Target>

			<Menu.Dropdown>
				{ columns.map((column) => {
					const header = column.columnDef.header
					const label = typeof header === "string" ? header : column.id
					return (
						<Menu.Item key={ column.id } component="div" style={ { cursor: "default", padding: 0 } }>
							<Checkbox
								label={ label }
								onChange={ (e) => handleChange(column.id!, e.target.checked) }
								checked={ column.getIsVisible() }
								p="xs"
							/>
						</Menu.Item>
					)
				}) }
			</Menu.Dropdown>
		</Menu>
	)
}
