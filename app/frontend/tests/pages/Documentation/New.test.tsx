import { describe, test, expect, beforeEach } from "vitest"

import NewDocumentation from "@/pages/Documentation/New"
import { render } from "@/tests/helpers/utils"

import {
	createMockDocumentationsFormData,
} from "./helpers"

describe("Documentation/New", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/documentations/new"
		window.location.pathname = "/documentations/new"
	})

	test("renders without error", () => {
		const documentation = createMockDocumentationsFormData()

		expect(() => {
			render(<NewDocumentation documentation={ documentation } />)
		}).not.toThrow()
	})
})
