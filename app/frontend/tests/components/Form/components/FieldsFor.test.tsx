import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Form } from "@/components/Form"
import { FieldsFor } from "@/components/Form/components"
import { TextInput } from "@/components/Form/Inputs"
import { render } from "@/tests/helpers/utils"

describe("FieldsFor", () => {
	it("renders without error", () => {
		render(
			<Form to="/test" data={ { user: { name: "" } } } disableFormatting>
				<FieldsFor model="user">
					<TextInput name="name" />
				</FieldsFor>
			</Form>
		)
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})

	it("renders with legend", () => {
		render(
			<Form to="/test" data={ { user: { name: "" } } } disableFormatting>
				<FieldsFor model="user" legend="User Information">
					<TextInput name="name" />
				</FieldsFor>
			</Form>
		)
		expect(screen.getByText("User Information")).toBeInTheDocument()
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})
})
