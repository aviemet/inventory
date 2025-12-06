import { describe, test, expect } from "vitest"

import CompaniesIndex from "@/pages/Companies/Index"
import { render } from "@/tests/helpers/utils"

import {
	createMockCompaniesIndex,
	createMockPagination,
} from "./helpers"

describe("Companies/Index", () => {
	test("renders without error", () => {
		const companies = [createMockCompaniesIndex()]
		const pagination = createMockPagination()

		const { container } = render(<CompaniesIndex companies={ companies } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with multiple companies", () => {
		const companies = [
			createMockCompaniesIndex({ id: 1, name: "Company 1" }),
			createMockCompaniesIndex({ id: 2, name: "Company 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		const { container } = render(<CompaniesIndex companies={ companies } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with empty companies array", () => {
		const companies: Schema.CompaniesIndex[] = []
		const pagination = createMockPagination({ count: 0 })

		const { container } = render(<CompaniesIndex companies={ companies } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
