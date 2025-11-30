import { describe, test, expect, beforeEach } from "vitest"

import ShowContract from "@/pages/Contracts/Show"
import { render } from "@/tests/helpers/utils"

import {
	createMockContractsShow,
} from "./helpers"

describe("Contracts/Show", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/contracts/1"
		window.location.pathname = "/contracts/1"
	})

	test("renders without error", () => {
		const contract = createMockContractsShow()

		const { container } = render(<ShowContract contract={ contract } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
