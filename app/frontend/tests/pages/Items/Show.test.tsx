import { describe, test, expect, beforeEach } from "vitest"

import ShowItem from "@/pages/Items/Show"
import { testShowPageTabs } from "@/tests/helpers/testTabs"
import { render } from "@/tests/helpers/utils"

import {
	createMockItemsShow,
} from "./helpers"

describe("Items/Show", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/items/1"
		window.location.pathname = "/items/1"
	})

	test("renders without error", () => {
		const item = createMockItemsShow()

		const { container } = render(<ShowItem item={ item } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with item without name", () => {
		const item = createMockItemsShow({ name: undefined })

		const { container } = render(<ShowItem item={ item } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with assigned item", () => {
		const item = createMockItemsShow({ assigned: true })

		const { container } = render(<ShowItem item={ item } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders all tabs and their content", async() => {
		const item = createMockItemsShow()

		render(<ShowItem item={ item } />)

		await testShowPageTabs(["Details", "History", "Documentation", "Associations"])
	})
})
