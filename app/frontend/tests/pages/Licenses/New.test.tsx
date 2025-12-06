import { describe, test, expect, beforeEach } from "vitest"

import NewLicense from "@/pages/Licenses/New"
import { render } from "@/tests/helpers/utils"

import {
	createMockLicensesFormData,
} from "./helpers"

describe("Licenses/New", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/licenses/new"
		window.location.pathname = "/licenses/new"
	})

	test("renders without error", () => {
		const license = createMockLicensesFormData()

		const { container } = render(<NewLicense license={ license } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
