import { describe, test, expect, beforeEach } from "vitest"

import EditItem from "@/pages/Items/Edit"
import { render } from "@/tests/helpers/utils"

import {
	createMockItemsEdit,
} from "./helpers"

describe("Items/Edit", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/items/1/edit"
		window.location.pathname = "/items/1/edit"
	})

	test("renders without error", () => {
		const item = createMockItemsEdit()

		expect(() => {
			render(<EditItem item={ item } />)
		}).not.toThrow()
	})

	test("renders with item without name", () => {
		const item = createMockItemsEdit({ name: "" })

		expect(() => {
			render(<EditItem item={ item } />)
		}).not.toThrow()
	})
})
