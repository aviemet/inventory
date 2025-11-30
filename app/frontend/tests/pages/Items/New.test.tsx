import { describe, test, expect, beforeEach } from "vitest"

import NewItem from "@/pages/Items/New"
import { render } from "@/tests/helpers/utils"

import {
	createMockItemsFormData,
} from "./helpers"

describe("Items/New", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/items/new"
		window.location.pathname = "/items/new"
	})

	test("renders without error", () => {
		const item = createMockItemsFormData()

		expect(() => {
			render(<NewItem item={ item } />)
		}).not.toThrow()
	})
})
