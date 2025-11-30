import { describe, test, expect } from "vitest"

import ItemsIndex from "@/pages/Items/Index"
import { render } from "@/tests/helpers/utils"

import {
	createMockItemsIndex,
	createMockPagination,
} from "./helpers"

describe("Items/Index", () => {
	test("renders without error", () => {
		const items = [createMockItemsIndex()]
		const pagination = createMockPagination()

		expect(() => {
			render(<ItemsIndex items={ items } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with multiple items", () => {
		const items = [
			createMockItemsIndex({ id: 1, name: "Item 1" }),
			createMockItemsIndex({ id: 2, name: "Item 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		expect(() => {
			render(<ItemsIndex items={ items } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with empty items array", () => {
		const items: Schema.ItemsIndex[] = []
		const pagination = createMockPagination({ count: 0 })

		expect(() => {
			render(<ItemsIndex items={ items } pagination={ pagination } />)
		}).not.toThrow()
	})
})
