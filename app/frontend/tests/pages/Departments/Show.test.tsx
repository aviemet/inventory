import { describe, test, expect, beforeEach } from "vitest"

import ShowDepartment from "@/pages/Departments/Show"
import { render } from "@/tests/helpers/utils"

import {
	createMockDepartmentsShow,
	createMockPaginatedModel,
} from "./helpers"

describe("Departments/Show", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/departments/test-department"
		window.location.pathname = "/departments/test-department"
	})

	test("renders without error", () => {
		const department = createMockDepartmentsShow()
		const items = createMockPaginatedModel<Schema.Item[]>([])
		const accessories = createMockPaginatedModel<Schema.Accessory[]>([])
		const components = createMockPaginatedModel<Schema.Component[]>([])
		const consumables = createMockPaginatedModel<Schema.Consumable[]>([])
		const licenses = createMockPaginatedModel<Schema.License[]>([])
		const people = createMockPaginatedModel<Schema.Person[]>([])

		const { container } = render(<ShowDepartment
			department={ department }
			items={ items }
			accessories={ accessories }
			components={ components }
			consumables={ consumables }
			licenses={ licenses }
			people={ people }
		/>)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with department without name", () => {
		const department = createMockDepartmentsShow({ name: undefined })
		const items = createMockPaginatedModel<Schema.Item[]>([])
		const accessories = createMockPaginatedModel<Schema.Accessory[]>([])
		const components = createMockPaginatedModel<Schema.Component[]>([])
		const consumables = createMockPaginatedModel<Schema.Consumable[]>([])
		const licenses = createMockPaginatedModel<Schema.License[]>([])
		const people = createMockPaginatedModel<Schema.Person[]>([])

		const { container } = render(<ShowDepartment
			department={ department }
			items={ items }
			accessories={ accessories }
			components={ components }
			consumables={ consumables }
			licenses={ licenses }
			people={ people }
		/>)

		expect(container.firstChild).toBeInTheDocument()
	})
})
