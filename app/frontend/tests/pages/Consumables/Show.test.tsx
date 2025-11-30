import { describe, test, expect, beforeEach } from "vitest"

import ShowConsumable from "@/pages/Consumables/Show"
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

		expect(() => {
			render(<ShowConsumable consumable={ consumable } />)
		}).not.toThrow()
	})

	test("renders with consumable without name", () => {
		const consumable = createMockConsumablesShow({ name: undefined })

		expect(() => {
			render(<ShowConsumable consumable={ consumable } />)
		}).not.toThrow()
	})

	test("renders with zero available quantity", () => {
		const consumable = createMockConsumablesShow({ qty_available: 0 })

		expect(() => {
			render(<ShowConsumable consumable={ consumable } />)
		}).not.toThrow()
	})
})
