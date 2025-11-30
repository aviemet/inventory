import { describe, test, expect, beforeEach } from "vitest"

import EditDepartment from "@/pages/Departments/Edit"
import { render } from "@/tests/helpers/utils"

import {
	createMockDepartmentsEdit,
} from "./helpers"

describe("Departments/Edit", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/departments/test-department/edit"
		window.location.pathname = "/departments/test-department/edit"
	})

	test("renders without error", () => {
		const department = createMockDepartmentsEdit()

		expect(() => {
			render(<EditDepartment department={ department } />)
		}).not.toThrow()
	})

	test("renders with department without name", () => {
		const department = createMockDepartmentsEdit({ name: "" })

		expect(() => {
			render(<EditDepartment department={ department } />)
		}).not.toThrow()
	})
})
