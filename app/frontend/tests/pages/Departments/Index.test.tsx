import { describe, test, expect } from "vitest"

import DepartmentsIndex from "@/pages/Departments/Index"
import { render } from "@/tests/helpers/utils"

import {
	createMockDepartmentsIndex,
	createMockPagination,
} from "./helpers"

describe("Departments/Index", () => {
	test("renders without error", () => {
		const departments = [createMockDepartmentsIndex()]
		const pagination = createMockPagination()

		expect(() => {
			render(<DepartmentsIndex departments={ departments } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with multiple departments", () => {
		const departments = [
			createMockDepartmentsIndex({ id: 1, name: "Department 1" }),
			createMockDepartmentsIndex({ id: 2, name: "Department 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		expect(() => {
			render(<DepartmentsIndex departments={ departments } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with empty departments array", () => {
		const departments: Schema.DepartmentsIndex[] = []
		const pagination = createMockPagination({ count: 0 })

		expect(() => {
			render(<DepartmentsIndex departments={ departments } pagination={ pagination } />)
		}).not.toThrow()
	})
})
