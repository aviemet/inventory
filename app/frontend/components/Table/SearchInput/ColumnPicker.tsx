import { router } from "@inertiajs/react"
import { Button } from "@mantine/core"
import axios from "axios"
import clsx from "clsx"
import React from "react"

import { Menu } from "@/components"
import { ColumnsIcon } from "@/components/Icons"
import { Checkbox } from "@/components/Inputs"
import { Routes } from "@/lib"
import { usePageProps } from "@/lib/hooks"

import * as classes from "../Table.css"
import { useTableContext } from "../TableContext/TableContext"

export function ColumnPicker() {
	const { auth: { user } } = usePageProps()
	const context = useTableContext(false)

	if(!context || !context.hideable || !context.model) return null

	const { hideable, columns, model } = context

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		axios.patch(Routes.apiUpdateTablePreferences(user.id!), {
			user: {
				table_preferences: {
					[model]: {
						hide: {
							[e.target.name]: !e.target.checked,
						},
					},
				},
			},
		}).then(() => {
			router.reload({ only: ["auth"] })
		})
	}

	const hideableColumns = Array.from(columns.values()).filter(col => col.hideable)

	return (
		<Menu closeOnItemClick={ false } position="bottom-end">
			<Menu.Target>
				<Button size="md" p="xs" className={ clsx(classes.columnPickerButton) }>
					<ColumnsIcon size={ 24 } />
				</Button>
			</Menu.Target>

			<Menu.Dropdown>
				{ hideableColumns.map((column) => (
					<Menu.Item key={ column.id } component="div" style={ { cursor: "default", padding: 0 } }>
						<Checkbox
							name={ column.hideable! }
							label={ column.label }
							onChange={ handleChange }
							checked={ !user.table_preferences?.[model]?.hide?.[column.hideable!] }
							p="xs"
						/>
					</Menu.Item>
				)) }
			</Menu.Dropdown>
		</Menu>
	)
}
