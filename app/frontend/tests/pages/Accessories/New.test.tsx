import { describe, test, expect, beforeEach } from "vitest"

import NewAccessory from "@/pages/Accessories/New"
import { render } from "@/tests/helpers/utils"

import {
	createMockAccessoriesFormData,
} from "./helpers"

describe("Accessories/New", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/accessories/new"
		window.location.pathname = "/accessories/new"
	})

	test("renders without error", () => {
		const accessory = createMockAccessoriesFormData()

		expect(() => {
			render(<NewAccessory accessory={ accessory } />)
		}).not.toThrow()
	})
})
