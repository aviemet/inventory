import React from "react"

import { Grid } from "@/components"
import { DynamicInputs, Textarea, TextInput } from "@/components/Form"
import { FormCategoriesDropdown } from "@/features/Dropdowns"

const Phone = () => {
	return (
		<DynamicInputs model="phones" label="Phone Numbers" emptyData={ {
			number: "",
			extension: "",
			notes: "",
			category_id: "",
		} } >
			<Grid.Col span={ { sm: 12, md: 8 } }>
				<TextInput label="Number" name="number" />
			</Grid.Col>

			<Grid.Col span={ { sm: 12, md: 4 } }>
				<TextInput label="Extension" name="extension" disableAutofill />
			</Grid.Col>

			<Grid.Col>
				<FormCategoriesDropdown categorizable_type="Phone" />
			</Grid.Col>

			<Grid.Col>
				<Textarea name="notes" label="Notes" />
			</Grid.Col>
		</DynamicInputs>
	)
}

export default Phone
