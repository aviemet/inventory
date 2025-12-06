import { describe, test, expect, beforeEach } from "vitest"

import NetworkEdit from "@/pages/Networks/Edit"
import { render } from "@/tests/helpers/utils"

import {
	createMockNetworkEdit,
} from "./helpers"

describe("Networks/Edit", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/networks/1/edit"
		window.location.pathname = "/networks/1/edit"
	})

	test("renders without error", () => {
		const network = createMockNetworkEdit()

		const { container } = render(<NetworkEdit network={ network } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
