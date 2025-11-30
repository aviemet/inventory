import { describe, test, expect, beforeEach } from "vitest"

import EditDocumentation from "@/pages/Documentation/Edit"
import { render } from "@/tests/helpers/utils"

import {
	createMockDocumentationsEdit,
} from "./helpers"

describe("Documentation/Edit", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/documentations/test-documentation/edit"
		window.location.pathname = "/documentations/test-documentation/edit"
	})

	test("renders without error", () => {
		const documentation = createMockDocumentationsEdit()

		expect(() => {
			render(<EditDocumentation documentation={ documentation } />)
		}).not.toThrow()
	})

	test("renders with documentation without title", () => {
		const documentation = createMockDocumentationsEdit({ title: undefined })

		expect(() => {
			render(<EditDocumentation documentation={ documentation } />)
		}).not.toThrow()
	})
})
