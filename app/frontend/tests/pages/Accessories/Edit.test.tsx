import { describe, test, expect, beforeEach } from "vitest"

import EditAccessory from "@/pages/Accessories/Edit"
import { render } from "@/tests/helpers/utils"

import {
	createMockAccessoriesEdit,
} from "./helpers"

describe("Accessories/Edit", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/accessories/1/edit"
		window.location.pathname = "/accessories/1/edit"
	})

	test("renders without error", () => {
		const accessory = createMockAccessoriesEdit()

		expect(() => {
			render(<EditAccessory accessory={ accessory } />)
		}).not.toThrow()
	})

	test("renders with accessory without name", () => {
		const accessory = createMockAccessoriesEdit({ name: "" })

		expect(() => {
			render(<EditAccessory accessory={ accessory } />)
		}).not.toThrow()
	})
})
