import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Form } from "@/components/Form"
import { FormGroup } from "@/components/Form/components"
import { TextInput } from "@/components/Form/Inputs"
import { render } from "@/tests/helpers/utils"

describe("FormGroup", () => {
	it("renders without error", () => {
		render(
			<Form to="/test" data={ { name: "" } }>
				<FormGroup grid={ false }>
					<TextInput name="name" />
				</FormGroup>
			</Form>
		)
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})

	it("renders with legend", () => {
		render(
			<Form to="/test" data={ { name: "" } }>
				<FormGroup legend="Test Group" grid={ false }>
					<TextInput name="name" />
				</FormGroup>
			</Form>
		)
		expect(screen.getByText("Test Group")).toBeInTheDocument()
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})

	it("renders with outline prop", () => {
		render(
			<Form to="/test" data={ { name: "" } }>
				<FormGroup outline grid={ false }>
					<TextInput name="name" />
				</FormGroup>
			</Form>
		)
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})

	it("renders with model prop", () => {
		render(
			<Form to="/test" data={ { items: [{ name: "" }] } }>
				<FormGroup model="items" grid={ false }>
					<TextInput name="name" />
				</FormGroup>
			</Form>
		)
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})

	it("renders with grid prop set to false", () => {
		render(
			<Form to="/test" data={ { name: "" } }>
				<FormGroup grid={ false }>
					<TextInput name="name" />
				</FormGroup>
			</Form>
		)
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})
})
