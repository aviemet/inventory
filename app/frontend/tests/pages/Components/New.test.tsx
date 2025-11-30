import { describe, test, expect, beforeEach } from "vitest"

import NewComponent from "@/pages/Components/New"
import { render } from "@/tests/helpers/utils"

import {
	createMockComponentsFormData,
} from "./helpers"

describe("Components/New", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/components/new"
		window.location.pathname = "/components/new"
	})

	test("renders without error", () => {
		const component = createMockComponentsFormData()

		const { container } = render(<NewComponent component={ component } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
