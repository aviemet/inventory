import { describe, test, expect, beforeEach } from "vitest"

import NetworkNew from "@/pages/Networks/New"
import { render } from "@/tests/helpers/utils"

import {
	createMockNetworkFormData,
} from "./helpers"

describe("Networks/New", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/networks/new"
		window.location.pathname = "/networks/new"
	})

	test("renders without error", () => {
		const network = createMockNetworkFormData()

		expect(() => {
			render(<NetworkNew network={ network } />)
		}).not.toThrow()
	})
})
