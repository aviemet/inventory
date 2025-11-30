import { describe, test, expect } from "vitest"

import AccessoriesIndex from "@/pages/Accessories/Index"
import { render } from "@/tests/helpers/utils"

import {
	createMockAccessoriesIndex,
	createMockPagination,
} from "./helpers"

describe("Accessories/Index", () => {
	test("renders without error", () => {
		const accessories = [createMockAccessoriesIndex()]
		const pagination = createMockPagination()

		expect(() => {
			render(<AccessoriesIndex accessories={ accessories } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with multiple accessories", () => {
		const accessories = [
			createMockAccessoriesIndex({ id: 1, name: "Accessory 1" }),
			createMockAccessoriesIndex({ id: 2, name: "Accessory 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		expect(() => {
			render(<AccessoriesIndex accessories={ accessories } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with empty accessories array", () => {
		const accessories: Schema.AccessoriesIndex[] = []
		const pagination = createMockPagination({ count: 0 })

		expect(() => {
			render(<AccessoriesIndex accessories={ accessories } pagination={ pagination } />)
		}).not.toThrow()
	})
})
