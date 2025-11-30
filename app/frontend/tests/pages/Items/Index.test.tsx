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

		const { container } = render(<ItemsIndex items={ items } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with multiple items", () => {
		const items = [
			createMockItemsIndex({ id: 1, name: "Item 1" }),
			createMockItemsIndex({ id: 2, name: "Item 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		const { container } = render(<ItemsIndex items={ items } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with empty items array", () => {
		const items: Schema.ItemsIndex[] = []
		const pagination = createMockPagination({ count: 0 })

		const { container } = render(<ItemsIndex items={ items } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
