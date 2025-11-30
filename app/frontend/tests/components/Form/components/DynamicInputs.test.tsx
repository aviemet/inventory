import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { Form } from "@/components/Form"
import { DynamicInputs } from "@/components/Form/components"
import { TextInput } from "@/components/Form/Inputs"
import { render } from "@/tests/helpers/utils"

describe("DynamicInputs", () => {
	it("renders without error", () => {
		render(
			<Form to="/test" data={ { items: [] } }>
				<DynamicInputs model="items" emptyData={ { name: "" } }>
					<TextInput name="name" />
				</DynamicInputs>
			</Form>
		)
		const buttons = screen.getAllByRole("button")
		expect(buttons.length).toBeGreaterThan(0)
	})

	it("renders with label", () => {
		render(
			<Form to="/test" data={ { items: [] } }>
				<DynamicInputs model="items" emptyData={ { name: "" } } label="Items">
					<TextInput name="name" />
				</DynamicInputs>
			</Form>
		)
		expect(screen.getByText("Items")).toBeInTheDocument()
	})

	it("renders add button", () => {
		render(
			<Form to="/test" data={ { items: [] } }>
				<DynamicInputs model="items" emptyData={ { name: "" } }>
					<TextInput name="name" />
				</DynamicInputs>
			</Form>
		)
		const buttons = screen.getAllByRole("button")
		expect(buttons.length).toBeGreaterThan(0)
	})

	it("adds input when add button is clicked", async() => {
		const user = userEvent.setup()
		render(
			<Form to="/test" data={ { items: [] } }>
				<DynamicInputs model="items" emptyData={ { name: "" } }>
					<TextInput name="name" />
				</DynamicInputs>
			</Form>
		)
		const addButton = screen.getAllByRole("button")[0]
		await user.click(addButton)
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})

	it("renders with grid prop set to false", () => {
		render(
			<Form to="/test" data={ { items: [] } }>
				<DynamicInputs model="items" emptyData={ { name: "" } } grid={ false }>
					<TextInput name="name" />
				</DynamicInputs>
			</Form>
		)
		const buttons = screen.getAllByRole("button")
		expect(buttons.length).toBeGreaterThan(0)
	})
})
