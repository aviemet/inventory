import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Form } from "@/components/Form"
import { render } from "@/tests/helpers/utils"

describe("Form", () => {
	it("renders without error", () => {
		render(
			<Form to="/test" data={ {} }>
				<div>Test Content</div>
			</Form>
		)
		expect(screen.getByText("Test Content")).toBeInTheDocument()
	})

	it("renders with children", () => {
		render(
			<Form to="/test" data={ {} }>
				<div>Children Content</div>
			</Form>
		)
		expect(screen.getByText("Children Content")).toBeInTheDocument()
	})

	it("renders with disableFormatting prop", () => {
		render(
			<Form to="/test" data={ {} } disableFormatting>
				<div>Content</div>
			</Form>
		)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("renders with grid prop", () => {
		render(
			<Form to="/test" data={ {} } grid>
				<div>Content</div>
			</Form>
		)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})
})
