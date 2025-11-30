import { describe, test, expect, beforeEach } from "vitest"

import NewCategory from "@/pages/Categories/New"
import { render } from "@/tests/helpers/utils"

import {
	createMockCategoriesFormData,
} from "./helpers"

describe("Categories/New", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/categories/new"
		window.location.pathname = "/categories/new"
	})

	test("renders without error", () => {
		const category = createMockCategoriesFormData()

		expect(() => {
			render(<NewCategory category={ category } />)
		}).not.toThrow()
	})
})
