import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Form } from "@/components/Form"
import { Submit } from "@/components/Form/components"
import { render } from "@/tests/helpers/utils"

describe("Submit", () => {
	it("renders without error", () => {
		render(
			<Form to="/test" data={ {} }>
				<Submit>Save</Submit>
			</Form>
		)
		expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument()
	})

	it("renders with default text when no children", () => {
		render(
			<Form to="/test" data={ {} }>
				<Submit />
			</Form>
		)
		expect(screen.getByRole("button")).toBeInTheDocument()
	})

	it("renders cancel link when cancelRoute is provided", () => {
		render(
			<Form to="/test" data={ {} }>
				<Submit cancelRoute="/cancel">Save</Submit>
			</Form>
		)
		expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument()
		expect(screen.getByText("Cancel")).toBeInTheDocument()
	})

	it("renders without cancel link when cancelRoute is not provided", () => {
		render(
			<Form to="/test" data={ {} }>
				<Submit>Save</Submit>
			</Form>
		)
		expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument()
		expect(screen.queryByText("Cancel")).not.toBeInTheDocument()
	})
})
