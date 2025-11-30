import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Form } from "@/components/Form"
import { FormConsumer } from "@/components/Form/components"
import { render } from "@/tests/helpers/utils"

describe("FormConsumer", () => {
	it("renders without error", () => {
		render(
			<Form to="/test" data={ { name: "" } }>
				<FormConsumer>
					{ () => <div>Consumer Content</div> }
				</FormConsumer>
			</Form>
		)
		expect(screen.getByText("Consumer Content")).toBeInTheDocument()
	})

	it("renders children with form context", () => {
		render(
			<Form to="/test" data={ { name: "test" } }>
				<FormConsumer>
					{ (form) => <div>Form Available</div> }
				</FormConsumer>
			</Form>
		)
		expect(screen.getByText("Form Available")).toBeInTheDocument()
	})

	it("renders nothing when no children provided", () => {
		const { container } = render(
			<Form to="/test" data={ { name: "" } }>
				<FormConsumer />
			</Form>
		)
		expect(container.firstChild).toBeInTheDocument()
	})
})
