import { describe, test, expect, beforeEach } from "vitest"

import EditComponent from "@/pages/Components/Edit"
import { render } from "@/tests/helpers/utils"

import {
	createMockComponentsEdit,
} from "./helpers"

describe("Components/Edit", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/components/1/edit"
		window.location.pathname = "/components/1/edit"
	})

	test("renders without error", () => {
		const component = createMockComponentsEdit()

		const { container } = render(<EditComponent component={ component } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with component without name", () => {
		const component = createMockComponentsEdit({ name: "" })

		const { container } = render(<EditComponent component={ component } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
