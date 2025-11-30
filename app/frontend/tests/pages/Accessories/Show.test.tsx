import { describe, test, expect, beforeEach } from "vitest"

import ShowAccessory from "@/pages/Accessories/Show"
import { render } from "@/tests/helpers/utils"

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

		expect(() => {
			render(<ShowAccessory accessory={ accessory } />)
		}).not.toThrow()
	})

	test("renders with accessory without name", () => {
		const accessory = createMockAccessoriesShow({ name: undefined })

		expect(() => {
			render(<ShowAccessory accessory={ accessory } />)
		}).not.toThrow()
	})

	test("renders with zero available quantity", () => {
		const accessory = createMockAccessoriesShow({ qty_available: 0 })

		expect(() => {
			render(<ShowAccessory accessory={ accessory } />)
		}).not.toThrow()
	})
})
