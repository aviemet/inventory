import { describe, test, expect, beforeEach } from "vitest"

import ShowDocumentation from "@/pages/Documentation/Show"
import { render } from "@/tests/helpers/utils"

import {
	createMockDocumentationsShow,
} from "./helpers"

describe("Documentation/Show", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/documentations/test-documentation"
		window.location.pathname = "/documentations/test-documentation"
	})

	test("renders without error", () => {
		const documentation = createMockDocumentationsShow()

		expect(() => {
			render(<ShowDocumentation documentation={ documentation } />)
		}).not.toThrow()
	})
})
