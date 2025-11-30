import { describe, test, expect, beforeEach } from "vitest"

import ShowLicense from "@/pages/Licenses/Show"
import { render } from "@/tests/helpers/utils"

import {
	createMockLicensesShow,
} from "./helpers"

describe("Licenses/Show", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/licenses/1"
		window.location.pathname = "/licenses/1"
	})

	test("renders without error", () => {
		const license = createMockLicensesShow()

		expect(() => {
			render(<ShowLicense license={ license } />)
		}).not.toThrow()
	})

	test("renders with license without name", () => {
		const license = createMockLicensesShow({ name: undefined })

		expect(() => {
			render(<ShowLicense license={ license } />)
		}).not.toThrow()
	})

	test("renders with no available licenses", () => {
		const license = createMockLicensesShow({ qty: 5, assignments: [{ id: 1 } as Schema.Assignment, { id: 2 } as Schema.Assignment, { id: 3 } as Schema.Assignment, { id: 4 } as Schema.Assignment, { id: 5 } as Schema.Assignment] })

		expect(() => {
			render(<ShowLicense license={ license } />)
		}).not.toThrow()
	})
})
