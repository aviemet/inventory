import { describe, test, expect, beforeEach } from "vitest"

import ShowItem from "@/pages/Items/Show"
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

		expect(() => {
			render(<ShowItem item={ item } />)
		}).not.toThrow()
	})

	test("renders with item without name", () => {
		const item = createMockItemsShow({ name: undefined })

		expect(() => {
			render(<ShowItem item={ item } />)
		}).not.toThrow()
	})

	test("renders with assigned item", () => {
		const item = createMockItemsShow({ assigned: true })

		expect(() => {
			render(<ShowItem item={ item } />)
		}).not.toThrow()
	})
})
