import { describe, test, expect, beforeEach } from "vitest"

import NewCompany from "@/pages/Companies/New"
import { render } from "@/tests/helpers/utils"

import {
	createMockCompaniesFormData,
} from "./helpers"

describe("Companies/New", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/companies/new"
		window.location.pathname = "/companies/new"
	})

	test("renders without error", () => {
		const company = createMockCompaniesFormData()

		expect(() => {
			render(<NewCompany company={ company } />)
		}).not.toThrow()
	})
})
