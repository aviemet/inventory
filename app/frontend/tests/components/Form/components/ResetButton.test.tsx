import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { Form } from "@/components/Form"
import { ResetButton } from "@/components/Form/components"
import { TextInput } from "@/components/Form/Inputs"
import { render } from "@/tests/helpers/utils"

describe("ResetButton", () => {
	it("renders without error", () => {
		render(
			<Form to="/test" data={ { name: "" } }>
				<ResetButton />
			</Form>
		)
		expect(screen.getByRole("button", { name: "Reset" })).toBeInTheDocument()
	})

	it("renders with custom text", () => {
		render(
			<Form to="/test" data={ { name: "" } }>
				<ResetButton>Clear</ResetButton>
			</Form>
		)
		expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument()
	})

	it("handles click event", async() => {
		const user = userEvent.setup()
		render(
			<Form to="/test" data={ { name: "" } }>
				<TextInput name="name" />
				<ResetButton fields="name" />
			</Form>
		)
		const button = screen.getByRole("button", { name: "Reset" })
		await user.click(button)
		expect(button).toBeInTheDocument()
	})

	it("renders with fields prop", () => {
		render(
			<Form to="/test" data={ { name: "", email: "" } }>
				<ResetButton fields={ ["name", "email"] } />
			</Form>
		)
		expect(screen.getByRole("button", { name: "Reset" })).toBeInTheDocument()
	})
})
