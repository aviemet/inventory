import { waitFor, screen } from "@testing-library/react"
import { describe, test, expect, beforeEach } from "vitest"

import ShowCategory from "@/pages/Categories/Show"
import { render } from "@/tests/helpers/utils"

import {
	createMockCategoriesShow,
	createMockPagination,
} from "./helpers"

describe("Categories/Show", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/categories/test-category"
		window.location.pathname = "/categories/test-category"
	})

	test("renders without error", async() => {
		const category = createMockCategoriesShow()
		const records: Schema.Accessory[] = []
		const pagination = createMockPagination()

		render(<ShowCategory category={ category } records={ records } pagination={ pagination } />)

		await waitFor(() => {
			expect(screen.getByText(/Category:/)).toBeInTheDocument()
		}, { timeout: 2000 })
	})

	test("renders with empty records array", async() => {
		const category = createMockCategoriesShow()
		const records: (Schema.Accessory | Schema.Component | Schema.Consumable | Schema.Item | Schema.License)[] = []
		const pagination = createMockPagination({ count: 0 })

		render(<ShowCategory category={ category } records={ records } pagination={ pagination } />)

		await waitFor(() => {
			expect(screen.getByText(/Category:/)).toBeInTheDocument()
		}, { timeout: 2000 })
	})
})
