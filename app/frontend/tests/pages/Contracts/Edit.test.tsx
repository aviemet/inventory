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

		expect(() => {
			render(<EditContract contract={ contract } />)
		}).not.toThrow()
	})

	test("renders with contract without name", () => {
		const contract = createMockContractsEdit({ name: "" })

		expect(() => {
			render(<EditContract contract={ contract } />)
		}).not.toThrow()
	})
})
