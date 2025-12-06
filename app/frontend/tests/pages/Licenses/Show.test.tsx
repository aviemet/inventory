import { describe, test, expect, beforeEach } from "vitest"

import ShowLicense from "@/pages/Licenses/Show"
import { testShowPageTabs } from "@/tests/helpers/testTabs"
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

		const { container } = render(<ShowLicense license={ license } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with license without name", () => {
		const license = createMockLicensesShow({ name: undefined })

		const { container } = render(<ShowLicense license={ license } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with no available licenses", () => {
		const license = createMockLicensesShow({ qty: 5, assignments: [{ id: 1 } as Schema.Assignment, { id: 2 } as Schema.Assignment, { id: 3 } as Schema.Assignment, { id: 4 } as Schema.Assignment, { id: 5 } as Schema.Assignment] })

		const { container } = render(<ShowLicense license={ license } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders all tabs and their content", async() => {
		const license = createMockLicensesShow()

		render(<ShowLicense license={ license } />)

		await testShowPageTabs(["Details", "History", "Associations"])
	})
})
