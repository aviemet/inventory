import { describe, test, expect, beforeEach } from "vitest"

import NewDepartment from "@/pages/Departments/New"
import { render } from "@/tests/helpers/utils"

import {
	createMockDepartmentsFormData,
} from "./helpers"

describe("Departments/New", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/departments/new"
		window.location.pathname = "/departments/new"
	})

	test("renders without error", () => {
		const department = createMockDepartmentsFormData()

		const { container } = render(<NewDepartment department={ department } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
