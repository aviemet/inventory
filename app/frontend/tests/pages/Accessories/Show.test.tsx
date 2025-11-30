import { describe, test, expect, beforeEach } from "vitest"

import ShowAccessory from "@/pages/Accessories/Show"
import { render } from "@/tests/helpers/utils"
import { testShowPageTabs } from "@/tests/helpers/testTabs"

import {
	createMockAccessoriesShow,
} from "./helpers"

describe("Accessories/Show", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/accessories/1"
		window.location.pathname = "/accessories/1"
	})

	test("renders without error", () => {
		const accessory = createMockAccessoriesShow()

		const { container } = render(<ShowAccessory accessory={ accessory } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with accessory without name", () => {
		const accessory = createMockAccessoriesShow({ name: undefined })

		const { container } = render(<ShowAccessory accessory={ accessory } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with zero available quantity", () => {
		const accessory = createMockAccessoriesShow({ qty_available: 0 })

		const { container } = render(<ShowAccessory accessory={ accessory } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders all tabs and their content", async () => {
		const accessory = createMockAccessoriesShow()

		render(<ShowAccessory accessory={ accessory } />)

		await testShowPageTabs(["Details", "History", "Documentation", "Associations"])
	})
})
