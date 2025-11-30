import { describe, test, expect, beforeEach } from "vitest"

import EditLicense from "@/pages/Licenses/Edit"
import { render } from "@/tests/helpers/utils"

import {
	createMockLicensesEdit,
} from "./helpers"

describe("Licenses/Edit", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/licenses/1/edit"
		window.location.pathname = "/licenses/1/edit"
	})

	test("renders without error", () => {
		const license = createMockLicensesEdit()

		expect(() => {
			render(<EditLicense license={ license } />)
		}).not.toThrow()
	})

	test("renders with license without name", () => {
		const license = createMockLicensesEdit({ name: "" })

		expect(() => {
			render(<EditLicense license={ license } />)
		}).not.toThrow()
	})
})
