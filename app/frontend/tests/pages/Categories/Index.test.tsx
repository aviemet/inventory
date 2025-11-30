import { describe, test, expect } from "vitest"

import CategoriesIndex from "@/pages/Categories/Index"
import { render } from "@/tests/helpers/utils"

import {
	createMockCategoriesIndex,
	createMockPagination,
} from "./helpers"

describe("Categories/Index", () => {
	test("renders without error", () => {
		const categories = [createMockCategoriesIndex()]
		const pagination = createMockPagination()

		expect(() => {
			render(<CategoriesIndex categories={ categories } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with multiple categories", () => {
		const categories = [
			createMockCategoriesIndex({ id: 1, name: "Category 1" }),
			createMockCategoriesIndex({ id: 2, name: "Category 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		expect(() => {
			render(<CategoriesIndex categories={ categories } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with empty categories array", () => {
		const categories: Schema.CategoriesIndex[] = []
		const pagination = createMockPagination({ count: 0 })

		expect(() => {
			render(<CategoriesIndex categories={ categories } pagination={ pagination } />)
		}).not.toThrow()
	})
})
