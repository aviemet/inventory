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

		const { container } = render(<EditDepartment department={ department } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with department without name", () => {
		const department = createMockDepartmentsEdit({ name: "" })

		const { container } = render(<EditDepartment department={ department } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
