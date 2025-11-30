import { describe, test, expect, beforeEach } from "vitest"

import EditCategory from "@/pages/Categories/Edit"
import { render } from "@/tests/helpers/utils"

import {
	createMockCategoriesEdit,
} from "./helpers"

describe("Categories/Edit", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/categories/test-category/edit"
		window.location.pathname = "/categories/test-category/edit"
	})

	test("renders without error", () => {
		const category = createMockCategoriesEdit()

		expect(() => {
			render(<EditCategory category={ category } />)
		}).not.toThrow()
	})

	test("renders with category without name", () => {
		const category = createMockCategoriesEdit({ name: "" })

		expect(() => {
			render(<EditCategory category={ category } />)
		}).not.toThrow()
	})
})
