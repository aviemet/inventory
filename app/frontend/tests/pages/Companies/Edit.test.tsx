import { describe, test, expect, beforeEach } from "vitest"

import EditCompany from "@/pages/Companies/Edit"
import { render } from "@/tests/helpers/utils"

import {
	createMockCompaniesEdit,
} from "./helpers"

describe("Companies/Edit", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/companies/test-company/edit"
		window.location.pathname = "/companies/test-company/edit"
	})

	test("renders without error", () => {
		const company = createMockCompaniesEdit()

		const { container } = render(<EditCompany company={ company } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with company without name", () => {
		const company = createMockCompaniesEdit({ name: "" })

		const { container } = render(<EditCompany company={ company } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
