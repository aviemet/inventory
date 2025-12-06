import { describe, test, expect, beforeEach } from "vitest"

import NewContract from "@/pages/Contracts/New"
import { render } from "@/tests/helpers/utils"

import {
	createMockContractsFormData,
} from "./helpers"

describe("Contracts/New", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/contracts/new"
		window.location.pathname = "/contracts/new"
	})

	test("renders without error", () => {
		const contract = createMockContractsFormData()

		const { container } = render(<NewContract contract={ contract } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
