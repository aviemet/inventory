import { describe, test, expect, beforeEach } from "vitest"

import ShowConsumable from "@/pages/Consumables/Show"
import { testShowPageTabs } from "@/tests/helpers/testTabs"
import { render } from "@/tests/helpers/utils"

import {
	createMockConsumablesShow,
} from "./helpers"

describe("Consumables/Show", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/consumables/1"
		window.location.pathname = "/consumables/1"
	})

	test("renders without error", () => {
		const consumable = createMockConsumablesShow()

		const { container } = render(<ShowConsumable consumable={ consumable } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with consumable without name", () => {
		const consumable = createMockConsumablesShow({ name: undefined })

		const { container } = render(<ShowConsumable consumable={ consumable } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with zero available quantity", () => {
		const consumable = createMockConsumablesShow({ qty_available: 0 })

		const { container } = render(<ShowConsumable consumable={ consumable } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders all tabs and their content", async() => {
		const consumable = createMockConsumablesShow()

		render(<ShowConsumable consumable={ consumable } />)

		await testShowPageTabs(["Details", "History", "Documentation", "Associations"])
	})
})
