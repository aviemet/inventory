import { describe, test, expect } from "vitest"

import DocumentationsIndex from "@/pages/Documentation/Index"
import { render } from "@/tests/helpers/utils"

import {
	createMockDocumentationsIndex,
	createMockPagination,
} from "./helpers"

describe("Documentation/Index", () => {
	test("renders without error", () => {
		const documentations = [createMockDocumentationsIndex()]
		const pagination = createMockPagination()

		expect(() => {
			render(<DocumentationsIndex documentations={ documentations } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with multiple documentations", () => {
		const documentations = [
			createMockDocumentationsIndex({ id: 1, title: "Doc 1" }),
			createMockDocumentationsIndex({ id: 2, title: "Doc 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		expect(() => {
			render(<DocumentationsIndex documentations={ documentations } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with empty documentations array", () => {
		const documentations: Schema.DocumentationsIndex[] = []
		const pagination = createMockPagination({ count: 0 })

		expect(() => {
			render(<DocumentationsIndex documentations={ documentations } pagination={ pagination } />)
		}).not.toThrow()
	})
})
