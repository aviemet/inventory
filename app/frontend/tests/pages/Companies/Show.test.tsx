import { describe, test, expect, beforeEach } from "vitest"

import ShowCompany from "@/pages/Companies/Show"
import { render } from "@/tests/helpers/utils"

import {
	createMockCompaniesShow,
} from "./helpers"

describe("Companies/Show", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/companies/test-company"
		window.location.pathname = "/companies/test-company"
	})

	test("renders without error", () => {
		const company = createMockCompaniesShow()

		const { container } = render(<ShowCompany company={ company } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with company without contact", () => {
		const company = createMockCompaniesShow({ contact: undefined })

		const { container } = render(<ShowCompany company={ company } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
