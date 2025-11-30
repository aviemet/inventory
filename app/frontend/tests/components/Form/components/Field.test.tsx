import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Form } from "@/components/Form"
import { Field } from "@/components/Form/components"
import { TextInput } from "@/components/Form/Inputs"
import { render } from "@/tests/helpers/utils"

describe("Field", () => {
	it("renders without error", () => {
		render(
			<Form to="/test" data={ { name: "" } }>
				<Field>
					<TextInput name="name" />
				</Field>
			</Form>
		)
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})

	it("renders with type prop", () => {
		render(
			<Form to="/test" data={ { name: "" } }>
				<Field type="text">
					<TextInput name="name" />
				</Field>
			</Form>
		)
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})

	it("renders with required prop", () => {
		render(
			<Form to="/test" data={ { name: "" } }>
				<Field required>
					<TextInput name="name" />
				</Field>
			</Form>
		)
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})

	it("renders with errors prop", () => {
		render(
			<Form to="/test" data={ { name: "" } }>
				<Field errors>
					<TextInput name="name" />
				</Field>
			</Form>
		)
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})
})
