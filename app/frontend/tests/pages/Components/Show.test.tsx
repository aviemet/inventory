import { describe, test, expect, beforeEach } from "vitest"

import ShowComponent from "@/pages/Components/Show"
import { render } from "@/tests/helpers/utils"
import { testShowPageTabs } from "@/tests/helpers/testTabs"

import {
	createMockComponentsShow,
} from "./helpers"

describe("Components/Show", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/components/1"
		window.location.pathname = "/components/1"
	})

	test("renders without error", () => {
		const component = createMockComponentsShow()

		const { container } = render(<ShowComponent component={ component } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with component without name", () => {
		const component = createMockComponentsShow({ name: undefined })

		const { container } = render(<ShowComponent component={ component } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with zero available quantity", () => {
		const component = createMockComponentsShow({ qty_available: 0 })

		const { container } = render(<ShowComponent component={ component } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders all tabs and their content", async () => {
		const component = createMockComponentsShow()

		render(<ShowComponent component={ component } />)

		await testShowPageTabs(["Details", "History", "Documentation", "Associations"])
	})
})
