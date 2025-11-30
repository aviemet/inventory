import { screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { History } from "@/components"
import { render } from "@/tests/helpers/utils"

vi.mock("@/lib", async() => {
	const actual = await vi.importActual("@/lib")
	return {
		...actual,
		polymorphicRoute: vi.fn((model: string, param: string | number) => `/${model.toLowerCase()}s/${param}`),
	}
})

describe("History", () => {
	it("renders without error when activities are provided", () => {
		const activities: Schema.Activity[] = [
			{
				id: 1,
				key: "item.update",
				trackable_type: "Item",
				trackable_id: 1,
				created_at: new Date().toISOString(),
			},
		]
		render(<History activities={ activities } />)
		expect(screen.getByText("Updated")).toBeInTheDocument()
	})

	it("renders without error when assignments are provided", () => {
		const assignments: Schema.Assignment[] = [
			{
				id: 1,
				assign_toable_type: "Person",
				assign_toable_id: 1,
				assign_toable: {
					id: 1,
					name: "Test Person",
				},
			},
		]
		const activities: Schema.Activity[] = [
			{
				id: 1,
				key: "assignment.create",
				trackable_type: "Assignment",
				trackable_id: 1,
				created_at: new Date().toISOString(),
				parameters: {
					assign_toable_type: "Person",
					assign_toable_id: 1,
				},
			},
		]
		render(<History activities={ activities } assignments={ assignments } />)
		expect(screen.getByText("Test Person")).toBeInTheDocument()
	})

	it("renders nothing when no activities provided", () => {
		const { container } = render(<History />)
		const mainContent = container.querySelector("ul, ol, nav")
		expect(mainContent).toBeNull()
	})

	it("renders multiple activities", () => {
		const activities: Schema.Activity[] = [
			{
				id: 1,
				key: "item.update",
				trackable_type: "Item",
				trackable_id: 1,
				created_at: new Date().toISOString(),
			},
			{
				id: 2,
				key: "item.create",
				trackable_type: "Item",
				trackable_id: 1,
				created_at: new Date().toISOString(),
			},
		]
		render(<History activities={ activities } />)
		expect(screen.getByText("Updated")).toBeInTheDocument()
		expect(screen.getByText("Created")).toBeInTheDocument()
	})
})
