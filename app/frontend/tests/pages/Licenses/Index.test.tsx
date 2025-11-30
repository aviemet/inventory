import { describe, test, expect } from "vitest"

import LicensesIndex from "@/pages/Licenses/Index"
import { render } from "@/tests/helpers/utils"

import {
	createMockLicensesIndex,
	createMockPagination,
} from "./helpers"

describe("Licenses/Index", () => {
	test("renders without error", () => {
		const licenses = [createMockLicensesIndex()]
		const pagination = createMockPagination()

		expect(() => {
			render(<LicensesIndex licenses={ licenses } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with multiple licenses", () => {
		const licenses = [
			createMockLicensesIndex({ id: 1, name: "License 1" }),
			createMockLicensesIndex({ id: 2, name: "License 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		expect(() => {
			render(<LicensesIndex licenses={ licenses } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with empty licenses array", () => {
		const licenses: Schema.LicensesIndex[] = []
		const pagination = createMockPagination({ count: 0 })

		expect(() => {
			render(<LicensesIndex licenses={ licenses } pagination={ pagination } />)
		}).not.toThrow()
	})
})
