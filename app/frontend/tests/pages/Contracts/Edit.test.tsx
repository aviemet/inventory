import { describe, test, expect, beforeEach } from "vitest"

import EditContract from "@/pages/Contracts/Edit"
import { render } from "@/tests/helpers/utils"

import {
	createMockContractsEdit,
} from "./helpers"

describe("Contracts/Edit", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/contracts/1/edit"
		window.location.pathname = "/contracts/1/edit"
	})

	test("renders without error", () => {
		const contract = createMockContractsEdit()

		const { container } = render(<EditContract contract={ contract } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with contract without name", () => {
		const contract = createMockContractsEdit({ name: "" })

		const { container } = render(<EditContract contract={ contract } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
