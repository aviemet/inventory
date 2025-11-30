import { Checkbox } from "@/components/Inputs"
import { CheckboxProps } from "@/components/Inputs/Checkbox"

import { useTableContext, type TableRowData } from "../TableContext"
import { RenderedCell as Td } from "../Td"

interface RowCheckBoxProps extends CheckboxProps {
	selected: Set<string>
	rows?: readonly TableRowData[]
	allChecked: boolean
	indeterminate: boolean
}

export function HeadCheckbox({ selected, rows, allChecked, indeterminate, ...props }: RowCheckBoxProps) {
	const { setTableState } = useTableContext()

	const handleClick = () => {
		if(!rows || rows.length === 0) return

		if(selected.size === rows.length) {
			selected.clear()
		} else {
			rows.forEach(row => {
				selected.add(String(row.id))
			})
		}

		setTableState({ selected })
	}

	return (
		<Td fitContent>
			<Checkbox
				onChange={ handleClick }
				checked={ allChecked }
				indeterminate={ indeterminate }
				disabled={ rows?.length === 0 }
				aria-label={ `${allChecked ? "deselect" : "select"} all rows` }
				{ ...props }
			/>
		</Td>
	)
}
