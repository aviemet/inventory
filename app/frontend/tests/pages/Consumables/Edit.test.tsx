import { describe, test, expect, beforeEach } from "vitest"

import EditConsumable from "@/pages/Consumables/Edit"
import { render } from "@/tests/helpers/utils"

import {
	createMockConsumablesEdit,
} from "./helpers"

describe("Consumables/Edit", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/consumables/1/edit"
		window.location.pathname = "/consumables/1/edit"
	})

	test("renders without error", () => {
		const consumable = createMockConsumablesEdit()

		const { container } = render(<EditConsumable consumable={ consumable } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with consumable without name", () => {
		const consumable = createMockConsumablesEdit({ name: "" })

		const { container } = render(<EditConsumable consumable={ consumable } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
